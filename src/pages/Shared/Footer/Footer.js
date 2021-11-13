import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
  return (
    <Box sx={{ background: "#2E3B55", color: "white", p:2 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">ClassyEye</Typography>
            <br />
            <Typography variant="h6" sx={{fontSize: 16,}} textAlign="left">
              We are commited to our customer to give our best service. We are
              very much well known for our after sells service. Because we care
              each customers review. Also we give sunglass at best possible
              price. Stay tune with us to get offers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Contact us</Typography>
            <br />
            <Typography variant="h6" sx={{fontSize: 16,}} textAlign="left">
              <RoomIcon /> Head Office: 238/3, Banani Model Town. Dhaka-1207,
              Bangladesh. <br />
              <EmailIcon /> classyeye@gmail.com <br />
              <FacebookIcon /> classy.eye.2@facebook.com <br />
              <TwitterIcon /> classyeye@twitter.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">About us</Typography>
            <br />
            <Typography variant="h6" textAlign="left">
              <AccountCircleIcon />
              S.A Khan
            </Typography>
            <Typography sx={{fontSize: 16,}} variant="h6" textAlign="left">
              Founder & CEO of the company.
            </Typography>
            <Box textAlign='left' sx={{ pt:2}}>
            <TextField sx={{background: 'white', fontWeight:'bold'}} id="outlined-basic" label="Enter Email" variant="outlined" />
            <br />
            <Button endIcon={<SendIcon />} variant='contained'>Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
        <hr />
        <Typography sx={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}} variant='h6'>Copyright &copy; msabbir081@gmail.com</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
