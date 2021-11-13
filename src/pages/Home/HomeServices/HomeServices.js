import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeService from "../HomeService/HomeService";

const HomeServices = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("https://limitless-everglades-80966.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const totalProduct = products.length;
  const newProduct = [...products];
  const updateProduct = newProduct.splice(totalProduct-6, totalProduct);
  
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 5 }}>
        <Typography sx={{ color: "#2E3B55", fontWeight: "bold" }} variant="h5">
          Top Rated
        </Typography>
        <Link style={{textDecoration: 'none'}} to='/explore'>
          <Button
            sx={{
              background: "#2E3B55",
              color: "white",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Explore More
          </Button>
        </Link>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {updateProduct.map((product) => (
            <HomeService key={product._id} product={product}></HomeService>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeServices;
