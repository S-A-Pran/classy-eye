import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hook/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <Box>
      <Typography sx={{fontWeight:'bold', py:2}} textAlign="center" gutterBottom variant="h4" component="div">
        Profile
      </Typography>
      <Grid sx={{display:'flex', alignItems:'center', justifyContent:'center'}} container spacing={2}>
        <Grid textAlign="center" item xs={12} md={6}>
          <img width="60%" src="https://image.freepik.com/free-vector/competent-resume-writing-professional-cv-constructor-online-job-application-profile-creation-african-american-woman-filling-up-digital-form-concept-illustration_335657-2053.jpg" alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345, background:'lightgray' }}>
            <Box sx={{pt:2}} textAlign="center">
              <img
                width="50%"
                src="https://image.flaticon.com/icons/png/512/20/20649.png"
                alt=""
              />
            </Box>

            <CardContent>
              <Typography sx={{fontWeight:"bold"}} textAlign='center' gutterBottom variant="h5" component="div">
                {user?.displayName}
              </Typography>
              <Typography sx={{fontWeight:"bold"}} textAlign='center' variant="body2" color="text.secondary">
                {user?.email}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
