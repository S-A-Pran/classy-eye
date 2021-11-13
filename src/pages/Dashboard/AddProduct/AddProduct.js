import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MoneyIcon from "@mui/icons-material/Money";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";

import { useForm } from "react-hook-form";
import ImageIcon from "@mui/icons-material/Image";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";


const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
   
    fetch("https://limitless-everglades-80966.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Added Successfully");
        }
      });
    reset();
  };

  return (
    <>
      <Typography
        textAlign="center"
        sx={{ fontWeight: "bold", pb: 2 }}
        variant="h5"
      >
        Add Product
      </Typography>
      <Container>
        <Box>
          <Grid container sx={{display: "flex", alignItems:"center"}} spacing={2}>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                  <img width="50%" src="https://image.flaticon.com/icons/png/512/1237/1237911.png" alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Paper sx={{ p: 3 }} elevation={3}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                      variant="h5"
                    >
                      Put Product Info
                    </Typography>
                    <br />

                    <TextField
                      {...register("brand", { required: true })}
                      id="input-with-icon-textfield"
                      label="Brand"
                      type="text"
                      sx={{ width: "100%", fontWeight: "bold" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BrandingWatermarkIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      {...register("category", { required: true })}
                      id="input-with-icon-textfield"
                      label="Category"
                      type="text"
                      sx={{ width: "100%", fontWeight: "bold" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CategoryIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      id="input-with-icon-textfield"
                      label="Price"
                      type="text"
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("price", { required: true })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MoneyIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <br />
                    <br />
                    <TextField
                      id="input-with-icon-textfield"
                      label="Image Url"
                      type="text"
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("img", { required: true })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ImageIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                    <TextField
                      id="input-with-icon-textfield"
                      label="About"
                      type="text"
                      multiline
                      sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                      {...register("about", {
                        required: true,
                      })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InfoIcon />
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
                        Add
                      </Button>
                    </Box>
                  </form>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
