import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography, Grid,Button,Box} from '@mui/material';

const Latestpost = () => {

    const[latestPost,setLatest]=useState([]);

    async function fetchLatest()
    {
    await axios.get(`http://89.116.32.22:7702/api/letest-post`)   
    .then((res)=>{
        setLatest(res.data.data);
        console.log("latest is",res.data.data)
    })

    .catch((error)=>console.log("error is",error));
    }

    useEffect(()=>{
        fetchLatest()
    },[])

    console.log("latest is",latestPost)

  return (
    <Box sx={{marginBottom:"20px",maxWidth:"900px",width:"100%",backgroundColor:"Felicity"}}>
        <Grid container spacing={3} padding={2}>
            {
                latestPost.map((data,index)=>(
                <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
                <Card sx={{border:"4px solid red",gap:"2px",
                backgroundColor:"Felicity",
                }}>  
                <CardMedia
                    component="img"
                    height="200"
                    image={`data:${data.photo.contentType};base64,${data.photo.data}`}
                >
                </CardMedia>

                <CardContent sx={{backgroundColor:"black"}}>
                    <Typography sx={{color:"red",marginLeft:"50px"}}>
                     Likes:{data.likes}
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

export default Latestpost