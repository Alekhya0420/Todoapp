import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box,Card, CardContent, CardMedia, Typography, Grid,Button} from '@mui/material';
import {Link} from 'react-router-dom';

const Allblog = () => {
    const [allBlog, setAllBlog] = useState([]);

    async function fetchAllBlog() {
        await axios.get(`http://89.116.32.22:7702/api/allBlog`)
            .then((res) => {
                console.log("result is", res.data.data);
                setAllBlog(res.data.data);
            })
            .catch((error) => console.log("error is", error));
    }

    useEffect(() => {
        fetchAllBlog();
    }, []);

   console.log("case is",allBlog);
    return (
        <Box sx={{background:"linear-gradient(rgb(10,50,50),rgb(10,50,50))",marginTop:"30px"}}>
        <Grid container spacing={4} padding={2}>
            {
                allBlog.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card 
                        sx={{
                        backgroundColor: '#333', // Dark background color for the card 
                        color: '#fff', 
                        boxShadow: 3,
                        borderRadius: 2,
                        padding: 2,
                       }}>
                            {data.photo && data.photo.data && (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`data:${data.photo.contentType};base64,${data.photo.data}`}
                                    alt={data.title}
                                />
                            )}

                            <CardContent sx={{color:"white",
                                fontStyle:'italic',fontSize:"20px",background:"black"}}>
                                <Typography variant="h6">
                                    Title: {data.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Comment Count: {data.comment_count}
                                </Typography>
                                
                                <Link to={`image/${data._id}`}>
                                <Button sx={{backgroundColor:"red",color:"white",marginX:"10px"}}>Image:</Button>
                                </Link>

                                <Link to={`details/${data._id}`}>
                                <Button sx={{backgroundColor:"green",color:"white"}}>Details:</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
        </Box>
    );
};

export default Allblog;
