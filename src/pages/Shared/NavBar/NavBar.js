import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import MenuIcon from "@mui/icons-material/Menu";
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Menu from "@mui/material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Button } from "@mui/material";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";

const NavBar = () => {
  const theme = useTheme();
  const { user, logOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const name = user?.displayName;

  const update = name?.split(" ")[0];
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} textAlign="left">
      <AppBar style={{ background: "#2E3B55" }} position="fixed">
        <Toolbar>
          <Avatar
            sx={{ background: "white", mr: 1 }}
            alt="Remy Sharp"
            src="https://image.flaticon.com/icons/png/512/88/88816.png"
          />
          <Typography
            textAlign="left"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            ClassyEye
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={handleMenu}
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: "none" }} to="/home">
                    <Button
                      sx={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "black",
                      }}
                      startIcon={<HomeSharpIcon/>}
                    >
                      Home
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: "none" }} to="/explore">
                    <Button
                      sx={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "black",
                      }}
                      startIcon={<ExploreSharpIcon/>}
                    >
                      Explore
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: "none" }} to="/dashboard">
                    <Button
                      sx={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "black",
                      }}
                      startIcon={<DashboardCustomizeSharpIcon/>}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {user?.email ? (
                    <Button
                      sx={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                      startIcon={<LogoutIcon/>}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <Button
                        sx={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                  )}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, mr: 3, fontSize: 18 }}
              >
                <NavLink to="/home">
                  <Button
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Home
                  </Button>
                </NavLink>
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, mr: 3, fontSize: 18 }}
              >
                <NavLink to="/explore">
                  <Button
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Explore
                  </Button>
                </NavLink>
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, mr: 3, fontSize: 18 }}
              >
                <NavLink to="/dashboard">
                  <Button
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Dashboard
                  </Button>
                </NavLink>
              </Typography>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, mr: 3, fontSize: 18 }}
              >
                {user?.email ? (
                  <Box>
                    <Button
                      disabled
                      style={{ color: "black" }}
                      sx={{ background: "white", fontWeight: "bold" }}
                      startIcon={<PersonIcon />}
                    >
                      {update}
                      <FiberManualRecordIcon
                        sx={{ color: "success.main", fontSize: 18 }}
                      />
                    </Button>

                    <Button
                      sx={{ fontWeight: "bold", background: "red" }}
                      variant="contained"
                      onClick={logOut}
                      endIcon={<LogoutIcon sx={{ fontSize: 18 }} />}
                    >
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <NavLink to="/login">
                    <Button
                      sx={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                )}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
