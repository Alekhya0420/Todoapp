import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Box, Typography,Card,CardContent,Grid,container} from '@mui/material';


const Banner = () => {
  const[banner,SetBanner]=useState([]);

  async function fetchBanner()
  {
    await axios.get(`http://89.116.32.22:7702/api/banner`)
    .then((res)=>{
      SetBanner(res.data);
    })    

    .catch((error)=>console.log("error is",error));
  }

  useEffect(()=>{
    fetchBanner()
  },[])

  console.log("banner is",banner)

  return (
    <Box sx={{padding:"3"}}>
      <Typography variant='h3'  sx={{ marginBottom: 1, color: 'red' }}>
      {banner.message}
      </Typography> 

      <Grid container spacing={2} padding={2}>
      {
        banner?.bannerdata?.map((data,index)=>(
         <Grid item md={4} lg={4} key={index}>
         <Card
         sx={{
          backgroundColor: '#333',
          color: '#fff', 
          boxShadow: 3,
          borderRadius: 2,
          padding: 2,
          height:"450px"
        }}>
         <CardContent>

         <Typography variant='h4' >
          {data.title}
         </Typography>
        <hr></hr>
         <Typography variant='h6'>
          {data.description}
         </Typography>

         </CardContent> 
        </Card>
         </Grid> 
        ))
      }  
        
      </Grid>      

    </Box>
  )
}

export default Banner