import React from 'react';
import {Box,Typography,Link,Container} from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background:"skyblue"}}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          My Website where you can find some interesting react js sample projects
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
             Privacy Policy
       
            Terms of Service
          
       
            Contact Us
          
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
