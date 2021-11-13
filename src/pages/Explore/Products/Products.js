import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-80966.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 
  return (
    <Container sx={{pt:3, pb: 4}}>
      <Typography variant="h5" sx={{ fontWeight: "bold", pt: 8, pb:5 }}>
        Explore Our Exclusive collection
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
