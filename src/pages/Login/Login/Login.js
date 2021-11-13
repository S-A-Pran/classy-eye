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
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useForm } from "react-hook-form";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import GoogleIcon from "@mui/icons-material/Google";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link, useHistory, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../../hook/useAuth";

const Login = () => {
  const {
    emailPasswordSignin,
    signinWithGoogle,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const destination = location?.state?.from || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    emailPasswordSignin(data.email, data.password, history, destination);
    reset();
  };
  return (
    <>
      <NavBar></NavBar>
      <Container
        sx={{
          pt: 8,
          pb: 5,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <img
                width="100%"
                src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Paper sx={{ p: 3 }} elevation={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography
                    textAlign="center"
                    sx={{ fontWeight: "bold", py: 2 }}
                    variant="h5"
                  >
                    Please Login
                  </Typography>
                  <Box textAlign="center">
                    <Button
                    onClick={() => signinWithGoogle(history, destination)}
                      variant="contained"
                      sx={{
                        fontWeight: "bold",
                        background: "red",
                        color: "white",
                        width: "100%",
                      }}
                    >
                      <GoogleIcon sx={{ color: "yellow" }} /> Google Login
                    </Button>
                  </Box>
                  <br />

                  <TextField
                    {...register("email", { required: true })}
                    id="input-with-icon-textfield"
                    label="Email"
                    type="email"
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
                    label="Password"
                    type="password"
                    sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                    {...register("password", { required: true })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ fontWeight: "bold" }}
                    >
                      Login <LoginIcon />
                    </Button>
                  </Box>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: 16, py: 2 }}
                    textAlign="center"
                    variant="h6"
                  >
                    <Link to="/register">Not Registered? Register Here</Link>
                  </Typography>
                </form>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
