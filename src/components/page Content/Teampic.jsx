import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Card,CardContent,Box} from '@mui/material';

const Teampic = () => {
    const [teampic, setTimpic] = useState(null);
    const { teamid } = useParams();

    async function fetchTeampic() {
        
        await axios.get(`http://89.116.32.22:7702/api/team/photo/${teamid}`, {
                responseType: "blob"
        }).then((response)=>{
            const imageUrl = URL.createObjectURL(response.data);
            setTimpic(imageUrl);
        })
        .catch((error)=>console.log("error is",error)) 
    }

    useEffect(() => {
        fetchTeampic();
    }, []);
  
    console.log("pic is",teampic);
    return (
        
        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
        background: "linear-gradient(rgb(10, 50, 50),rgb(10, 50, 50))"
         }}>
           
            <Card style={{ maxWidth: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
            <h1>Our Team member:</h1>
                <CardContent>
                        <img
                            src={teampic}
                            alt="Team"
                            style={{
                                width: '100%',
                                borderRadius: '20px',
                                height:"400px"
                            }}
                        />
                  
                </CardContent>
            </Card>
        </Box>
    );
};

export default Teampic;
