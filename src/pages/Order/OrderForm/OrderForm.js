import {
  Button,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MoneyIcon from "@mui/icons-material/Money";
import ClassIcon from "@mui/icons-material/Class";
import CategoryIcon from "@mui/icons-material/Category";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../../hook/useAuth";
import { useParams } from "react-router";

const OrderForm = () => {
  const { user } = useAuth();
  const { email, displayName } = user;
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const { id } = useParams("");
  console.log(id);

  useEffect(() => {
    fetch(`https://limitless-everglades-80966.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <Box style={{ position: "absolute", top: "48%", left: "48%" }}>
        <CircularProgress />
      </Box>
    );
  }

  const { img, brand, category, price, _id } = product;

  const onSubmit = (data) => {
    // console.log(data);
    const orderDetail = {
      ...data,
      p_id: _id,
      brand,
      price,
      img,
      category,
      date: new Date().toLocaleDateString(),
      status: "pending",
    };
    console.log(orderDetail);
    fetch("https://limitless-everglades-80966.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thank You. Order Placed Successfully.");
        }
      });
    reset();
  };

  return (
    <>
      <NavBar></NavBar>
      <Typography
        textAlign="center"
        sx={{ fontWeight: "bold", pt: 10 }}
        variant="h5"
      >
        Order Form
      </Typography>
      <Container>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center", mt: 3, mb: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Paper sx={{ p: 3 }} elevation={3}>
                  <Typography
                    textAlign="center"
                    sx={{ fontWeight: "bold", py: 2 }}
                    variant="h5"
                  >
                    Product Info
                  </Typography>
                  <br />
                  <Box textAlign="center">
                    <img width="50%" src={img} alt="" />
                  </Box>
                  <br />
                  <Box
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                    }}
                  >
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <ClassIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Brand: ${brand}`} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <CategoryIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Category: ${category}`} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <MoneyIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Price: ${price}`} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                      </List>
                    </nav>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Paper sx={{ p: 3 }} elevation={3}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography
                      textAlign="center"
                      sx={{ fontWeight: "bold", py: 1 }}
                      variant="h5"
                    >
                      Fill Up Carefully
                    </Typography>
                    <br />

                    <TextField
                      {...register("name", { required: true })}
                      id="input-with-icon-textfield"
                      label="Name"
                      type="text"
                      defaultValue={displayName}
                      sx={{ width: "100%", fontWeight: "bold" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      {...register("email", { required: true })}
                      id="input-with-icon-textfield"
                      label="Email"
                      type="email"
                      defaultValue={email}
                      sx={{ width: "100%", fontWeight: "bold" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      id="input-with-icon-textfield"
                      label="Phone"
                      type="text"
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("phone", { required: true })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalPhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      id="input-with-icon-textfield"
                      label="Address"
                      type="text"
                      multiline
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("address", { required: true })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PinDropIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      label="Quantity"
                      type="number"
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("quantity", {
                        required: true,
                        min: 1,
                        max: 100,
                      })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AddShoppingCartIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    {errors.required && <span>This field is required</span>}
                    <Box textAlign="center">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ fontWeight: "bold" }}
                        endIcon={<DoubleArrowIcon />}
                      >
                        Place Order
                      </Button>
                    </Box>
                  </form>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default OrderForm;
