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
import { useForm } from "react-hook-form";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://limitless-everglades-80966.herokuapp.com/${data.email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully made an admin.");
        } else {
          alert("The email holder is aleady an admin");
        }
      });

    reset();
  };

  return (
    <>
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
                width="70%"
                src="https://image.freepik.com/free-vector/settings-concept-illustration_114360-4157.jpg"
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
                    Add New Admin
                  </Typography>
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

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ fontWeight: "bold", mt: 3 }}
                      endIcon={<AddCircleIcon />}
                    >
                      Add
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MakeAdmin;
