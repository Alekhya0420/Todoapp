// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {Box,Typography,Card,CardContent,Container,Grid, Button} from '@mui/material';
// import {Link} from 'react-router-dom';
// const Testimonials = () => {

//     const[testimonials,setTestimonials]=useState([]);

//     async function mytestimonials()
//     {
//       await axios.get(`http://89.116.32.22:7702/api/testimonial`)
//       .then((res)=>{
//         setTestimonials(res.data)
//       })

//       .catch((error)=>console.log("error is",error));
//     }

//     useEffect(()=>{
//         mytestimonials();
//     },[])

//   return (
//     <Box>
//     <Grid container spacing={3} padding={3}>
//         {
//             testimonials?.testimonials?.map((data,index)=>(
//                 <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
//                  <Card sx={{maxHeight:"250px",border:"1px solid red",overflow:"auto"}}>
//                     <h4>Name:{data.name}</h4>
//                     <h4>Position{data.position}</h4>
//                     <h4>Slug:{data.slug}</h4>
//                     <h4>Talk:{data.talk}</h4>

//                     <Link to={`/pagecontent/testimonial/${data._id}`}>
//                       <Button variant="contained">Details</Button>
//                     </Link>
//                  </Card>
//                 </Grid>
//             ))
//         }
//     </Grid>
//     </Box>
//   )
// }

// export default Testimonials


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  async function fetchTestimonials() {
    await axios
      .get('http://89.116.32.22:7702/api/testimonial')
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => console.log('Error is', error));
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{color: '#fff',color: 'red',alignItems:"center"}}>
        <h1>Our Testimonials</h1>
      </Typography>
      <Grid container spacing={3}>
        {testimonials?.testimonials?.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
            <Card
              sx={{
                backgroundColor: '#333', // Dark background color for the card
                color: '#fff', // White text color
                boxShadow: 3,
                borderRadius: 2,
                padding: 2,
                maxHeight: '250px',
                border: '1px solid red',
                overflow: 'auto',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {data.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic', marginBottom: 1 }}>
                  {data.position}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                  {data.talk}
                </Typography>
                <Link to={`/pagecontent/testimonial/${data._id}`}>
                  <Button variant="contained" sx={{ backgroundColor: 'red', color: '#fff' }}>
                    Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
