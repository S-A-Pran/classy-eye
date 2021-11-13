import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let color1 = "";
  let alignItems = "";
  let pb = "";
  isMobile ? (color1 = "white") : (color1 = "#2E3B55");
  isMobile ? (alignItems = "flex-end") : (alignItems = "center");
  isMobile ? (pb = "60px") : (pb = "0px");
  const style = {
    color: color1,
  };
  const style2 = {
    display: "flex",
    alignItems: alignItems,
    justifyContent: "end",
    paddingBottom: pb,
  };
  return (
    <Box
      style={{
        backgroundColor: "#2E3B55",
      }}
    >
      <Box
        style={{
          background: `url(https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "450px",
          objectFit: "contain",
        }}
      >
        <Container
          sx={{
            py: "auto",
            height: "500px",
          }}
          style={style2}
        >
          <Box>
            <Typography variant="h5" style={style} sx={{ fontWeight: "bold" }}>
              Fashion Without Sunglass? <br /> No Way...
              <br />
              Explore wide range of unique designs.
            </Typography>
            <Link style={{textDecoration: 'none'}} to='/explore'>
              <Button
                sx={{
                  background: "#000000",
                  color: "white",
                  fontWeight: "bold",
                  mt: 3,
                }}
                variant="contained"
              >
                Explore
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
