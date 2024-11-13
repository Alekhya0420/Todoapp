import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {encode} from 'base64-arraybuffer';
import {Card,CardContent,Box} from '@mui/material';

const TestimonialId = () => {
    const [photoUrl, setPhotoUrl] = useState(null);
    let { testId } = useParams();

    async function fetchTestimonialPhoto() {

        await axios.get(`http://89.116.32.22:7702/api/testimonials/photo/${testId}`, {
                responseType: "blob"
        })
        .then((response)=>
        {
            let imageUrl=URL.createObjectURL(response.data);
            setPhotoUrl(imageUrl);     
           
        }) 
        .catch ((error)=>console.log("error is",error))
    }

    useEffect(() => {
        fetchTestimonialPhoto();
    }, []);

    console.log("Testimonial photo",photoUrl);
    return (
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",
        background:"linear-gradient(rgb(10,50,50),rgb(10,50,50))"
    }}>
        <Card style={{ maxWidth: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
        <h1>Student:</h1>
            <CardContent>
            <img 
            src={photoUrl}
            style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                
            }}></img>

            </CardContent>
        </Card>    
    </Box>
    );
};

export default TestimonialId;
