import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box>
      <Typography
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        color="#FF2625"
        fontWeight="600"
        fontSize="26px"
        position="relative"
        p="20px"
      >
        FlexFit
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}}>
        Lift, Sweat <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out some of the most popular exercices.
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
    </Box>
  );
};

export default HeroBanner;
