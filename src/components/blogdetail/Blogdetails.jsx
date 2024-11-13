import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Button, Grid, TextField } from '@mui/material';
import { encode } from 'base64-arraybuffer';
import ShowAllCategory from '../showallcategory/ShowAllCategory';
import Latestpost from '../showallcategory/Latestpost';

const Blogdetails = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [categorypost, SetcatPost] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [comments, showComment] = useState([]);
    const [like, setLike] = useState(0);
    const [unlike, setunLike] = useState(0);

    const token = localStorage.getItem("token");
    const { detail } = useParams();

    async function fetchDetails() {
        try {
            const response = await axios.get(`http://89.116.32.22:7702/api/blogdetails/${detail}`, {
                headers: { "x-access-token": token }
            });
            setBlogDetails(response.data.data);
            setLike(response.data.data.likes);      
            setunLike(response.data.data.unlikes)
        } catch (error) {
            console.error("Error fetching blog details:", error);
        }
    }

    async function fectchCategoryPost() {
        await axios.get(`http://89.116.32.22:7702/api/category/post/${detail}`, {
            headers: { "x-access-token": token }
        })
        .then((res) => {
            SetcatPost(res.data.data);
        })
        .catch((error) => console.log("error is", error));
    }

    async function fetchComments() {
        await axios.get(`http://89.116.32.22:7702/api/comment/${detail}`, {
            headers: { "x-access-token": token }
        })
        .then((response) => {
            showComment(response.data.post.comment);
        })
        .catch((error) => console.log("error is", error));
    }

    async function fetchlike() {
        await axios.put(`http://89.116.32.22:7702/api/blog/like/${detail}`, {
            headers: { "x-access-token": token }
        })
        .then((res) => {
            setLike(res.data.likes);
            console.log("liked are",res)
        })
        .catch((error) => console.log("error is", error));
    }

    async function fetchunlike() {
        await axios.put(`http://89.116.32.22:7702/api/blog/unlike/${detail}`, {
            headers: { "x-access-token": token }
        })
        .then((res) => {
            setunLike(res.data.unlikes);
            console.log("dislikes are",res.data)
        })
        .catch((error) => console.log("error is", error));
    }

    useEffect(() => {
        fetchDetails();
        fectchCategoryPost();
        fetchComments();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://89.116.32.22:7702/api/blog/${detail}/comment/create`,{name,email,comment},{
            headers: { "x-access-token": token }
        })
        .then((res) => {
            console.log("result is", res);
        })
        .catch((error) => console.log("error is", error));
    };

    const getImageSrc = () => {
        if (blogDetails.photo && blogDetails.photo.data) {
            const arrayBuffer = new Uint8Array(blogDetails.photo.data.data).buffer;
            return `data:${blogDetails.photo.contentType};base64,${encode(arrayBuffer)}`;
        }
        return null;
    };

  console.log("blogdetails are",blogDetails)

    return (
        <Box sx={{ display: "flex", flexDirection: "column",  
        background: "linear-gradient(rgb(10,50,50),rgb(10,50,50))",
        color: "white", alignItems: "center", padding: 4 }}>

            {/* Header Section */}
            <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%", mb: 3 }}>
                <ShowAllCategory />
                <Latestpost />
            </Box>

            {/* Blog Details */}
            <Box sx={{ padding: 4, width: "100%", maxWidth: "900px" }}>
                <Card sx={{ backgroundColor: "#2d2d2d", color: "white", borderRadius: 3, boxShadow: "0px 5px 15px rgba(0,0,0,0.5)" }}>
                    {getImageSrc() && (
                        <CardMedia
                            component="img"
                            height="500"
                            image={getImageSrc()}
                            alt="Blog Image"
                            sx={{ borderRadius: "8px 8px 0 0" }}
                        />
                    )}
                    <CardContent sx={{ padding: 4 }}>
                        <Typography variant="h4" sx={{ color: '#ff4d4d', mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                            {blogDetails.title}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                padding: 2,
                                backgroundColor: '#333',
                                borderRadius: 12,
                                boxShadow: '10px 10px 18px rgba(0, 0, 0, 0.9)',
                                '& a': { color: "#ff4d4d", textDecoration: "underline" }
                            }}
                            dangerouslySetInnerHTML={{ __html: blogDetails.postText }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 3,
                                pt: 2,
                                borderTop: '1px solid lightgray',
                            }}
                        >
                            <Typography variant="body2" sx={{ color: 'white' }}>Likes: {like}</Typography>
                            <Typography variant="body2" sx={{ color: 'white' }}>Dislikes: {blogDetails.unlikes}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* Comment Form */}
            <Box sx={{ mt: 4, p: 3, backgroundColor: '#222', borderRadius: '15px', border: "1px solid #ff4d4d", width: "100%", maxWidth: "900px" }}>
                <Typography variant="h5" sx={{ color: '#ff4d4d', mb: 2 }}>Leave a Comment</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 2, backgroundColor: "white", borderRadius: 1,color:"white"}}
                        
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
                        
                    />
                    <TextField
                        label="Comment"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={(e) => setComment(e.target.value)}
                        sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
                      
                    />
                    <Button type="submit" sx={{ backgroundColor: '#ff4d4d', color: 'white', borderRadius: 2, width: '100%' }}>
                        Submit
                    </Button>
                </form>
            </Box>

            {/* Comments Section */}
            <Box sx={{ width: "100%", maxWidth: "950px", mt: 4 }}>
                <Typography variant="h5" sx={{ color: '#ff4d4d', mb: 2 }}>Comments:</Typography>
                <Grid container spacing={3}>
                    {comments?.comments?.length > 0 ? (
                        comments.comments.map((data, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={{ backgroundColor: "#2d2d2d", color: "#ff4d4d", p: 2, borderRadius: 2, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}>
                                    <Typography><strong style={{ color: "white" }}>Name:</strong> {data.name}</Typography>
                                    <Typography><strong style={{ color: "white" }}>Email:</strong> {data.email}</Typography>
                                    <Typography><strong style={{ color: "white" }}>Comment:</strong> {data.comment}</Typography>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ color: "#ff4d4d", textAlign: "center", mt: 2 }}>No comments</Typography>
                    )}
                </Grid>
                <p style={{color:"red"}}><span style={{color:"white"}}>Likes:</span>{like}</p>
                <Button onClick={fetchlike} sx={{ backgroundColor: 'green', color: 'white', borderRadius: 2, mt: 3, width: '100%' }}>
                    Like
                </Button>

                <p style={{color:"red"}}><span style={{color:"white"}}>Dislikes:</span>{unlike}</p>
                <Button onClick={fetchunlike} sx={{ backgroundColor: '#ff4d4d', color: 'white', borderRadius: 2, mt: 3, width: '100%' }}>
                    Dislike
                </Button>
            </Box>
        </Box>
    );
};

export default Blogdetails;
