import {
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-80966.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <Container sx={{mb: 5}}>
      <Typography sx={{ color: "#2E3B55", fontWeight: "bold", py:5 }} variant="h5">
        Testimonial
      </Typography>
      <Grid container spacing={2}>
        {review.map((rev) => (
          <Grid key={rev._id} item xs={12} md={3}>
            <Paper sx={{p:3}} elevation={3}>
              <Box sx={{py:3}} textAlign="center">
                <img
                  width="50%"
                  src="https://image.flaticon.com/icons/png/512/806/806195.png"
                  alt=""
                />
              </Box>
              <Typography
                textAlign="center"
                sx={{ fontWeight: "bold" }}
                variant="h6"
              >
                {rev.feedback}
              </Typography>
              <Box
                textAlign="center"
                
                sx={{ fontWeight: "bold", wdth: "100%" }}
                variant="h6"
                
              >
                <Stack sx={{width:"40%", mx:"auto"}} spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={rev.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Box>
              <Typography
                textAlign="right"
                sx={{ fontWeight: "bold", color:"gray", pr:2 }}
                variant="h6"
              >
                - {rev.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
