import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MoneyIcon from "@mui/icons-material/Money";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const HomeService = ({ product }) => {
  const { brand, category, price, img, about, _id } = product;
  return (
    <Grid item md={4} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={img} alt="Sunglass" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {about}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Gender: {category}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <MoneyIcon /> Price: {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box sx={{ mx: "auto" }}>
            <Link to = {`/placeorder/${_id}`} style={{textDecoration:'none'}}>
              <Button
                size="small"
                variant="contained"
                sx={{ background: "#2E3B55", color: "white" }}
              >
                Buy Now
              </Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HomeService;
