import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import RateReviewSharpIcon from "@mui/icons-material/RateReviewSharp";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useAuth from "../../../hook/useAuth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import AllOrders from "../AllOrders/AllOrders";
import Review from "../Review/Review";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ManageProducts from "../ManageProducts/ManageProducts";
import DashboardHome from "../DashboardHome/DashboardHome";

const drawerWidth = 250;

function Dashboard(props) {
  const { user, logOut, isAdmin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const location = useLocation();
  const pathName = location.pathname;

  let displayPath = pathName?.split("/")[2];
  !displayPath
    ? (displayPath = "")
    : (displayPath = `(${pathName?.split("/")[2]})`);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ margin: "0 auto" }}>
      <Box style={{ position: "absolute", left: "25%", top: "2%" }}>
        <Button sx={{ fontWeight: "bold" }} startIcon={<AccountCircleIcon />}>
          {user.displayName.split(" ")[0]}
          <FiberManualRecordIcon sx={{ color: "success.main", fontSize: 18 }} />
        </Button>
      </Box>
      <Toolbar />

      <Divider />
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "black",
            width: "100%",
            mt: 2,
          }}
          varient="contain"
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </Link>
      <Link to={`${url}`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<DashboardCustomizeIcon />}
        >
          Dashboard
        </Button>
      </Link>
      {!isAdmin && <Link to={`${url}/my_orders`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<ShoppingCartSharpIcon />}
        >
          My Orders
        </Button>
      </Link>}
      {!isAdmin && <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<AccountBalanceWalletSharpIcon />}
        >
          Pay Now
        </Button>
      </Link>}
      {!isAdmin && <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<RateReviewSharpIcon />}
        >
          Add Review
        </Button>
      </Link>}
      {isAdmin && <Link to={`${url}/manage_all_orders`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<BorderColorSharpIcon />}
        >
          Manage All Orders
        </Button>
      </Link>}
      {isAdmin && <Link to={`${url}/make_admin`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<PersonAddSharpIcon />}
        >
          Make Admin
        </Button>
      </Link>}
      {isAdmin && <Link to={`${url}/manage_products`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<SettingsApplicationsSharpIcon />}
        >
          Manage Products
        </Button>
      </Link>}
      {isAdmin && <Link to={`${url}/add_product`} style={{ textDecoration: "none" }}>
        <Button
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<AddTaskSharpIcon />}
        >
          Add Product
        </Button>
      </Link>}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          onClick={logOut}
          sx={{
            fontWeight: "bold",
            color: "black",
            width: "100%",
            py: 2,
          }}
          varient="contain"
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ background: "#2E3B55" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard {displayPath?.toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/manage_all_orders`}>
            <AllOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/my_orders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/add_product`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/make_admin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manage_products`}>
            <ManageProducts />
          </Route>
          <Route exact path={`${path}`}>
            <DashboardHome />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
