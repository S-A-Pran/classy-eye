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
import FeedIcon from "@mui/icons-material/Feed";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import useAuth from "../../../hook/useAuth";
import ReactStars from "react-rating-stars-component";


const Review = () => {
  const { user } = useAuth();
  const [star, setStar] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };
  const onSubmit = (data) => {
    data.rating = star;
    setStar(0);
    console.log(data);
    fetch("https://limitless-everglades-80966.herokuapp.com/reviews", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert("Thank You For Your Kind Review.")
        }
    })
    reset();

  };
  return (
    <>
      <Container
        sx={{
          py:5
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
                src="https://image.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg"
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
                    Give Your Valuable Feedback
                  </Typography>
                  <br />

                  <TextField
                    {...register("name", { required: true })}
                    id="input-with-icon-textfield"
                    label="Name"
                    type="text"
                    defaultValue={user.displayName}
                    sx={{ width: "100%", fontWeight: "bold" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon />
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
                    defaultValue={user.email}
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
                    label="Your Feedback"
                    type="text"
                    multiline
                    sx={{ pb: 2, width: "100%", fontWeight: "bold" }}
                    {...register("feedback", { required: true })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FeedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <Box sx={{display: 'flex', alignItems:'center', justifyContent:'start'}}>
                    <Typography variant="p" sx={{ fontWeight: "bold" }}>
                      Rate us:
                    </Typography>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </Box>
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ fontWeight: "bold" }}
                    >
                      Submit
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

export default Review;
