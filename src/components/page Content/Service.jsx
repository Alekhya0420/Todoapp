import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const Service = () => {
  const [service, setService] = useState([]);

  async function fetchService() {
    await axios
      .get('http://89.116.32.22:7702/api/service')
      .then((res) => {
        setService(res.data.data);
      })
      .catch((error) => console.log('Error is', error));
  }

  useEffect(() => {
    fetchService();
  }, []);

  //console.log('Services are', service);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: 4, color: 'red' }}>
        The Services We Provide
      </Typography>
      <Grid container spacing={3}>
        {service?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#333', // Dark background color for the card
                color: '#fff', // White text color
                boxShadow: 10,
                borderRadius: 2,
                padding: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {data.name}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {data.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
