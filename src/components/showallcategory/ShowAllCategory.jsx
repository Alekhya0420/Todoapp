import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material';
import {Link} from 'react-router-dom';

const ShowAllCategory = () => {
    const[category,SetCategory] = useState([]);

    async function fectchCategory()
    {
        try 
        {
            const response = await axios.get(`http://89.116.32.22:7702/api/showallcategory`);
            SetCategory(response.data.data);
        } 
        catch (error) 
        {
            console.error("Error fetching blog details:", error);
        }
    }

    

    useEffect(()=>{
        fectchCategory()
    },[])

    console.log("category is",category);

  return (
    <Box sx={{ width: '200px', padding: '1rem', }}>

    <h1 style={{color:"red"}}>Categories</h1>
        {
            category.map((category)=>(
                <Paper key={category.id} elevation={1}
                sx={{
                    padding: '0.5rem',
                    marginBottom: '0.5rem',
                    backgroundColor: '#224',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    borderRadius: 1,
                    boxShadow: 3,
                }}
                >
                  
                    {category.category}
               
                </Paper>
            ))
        }
    </Box>

  )
}

export default ShowAllCategory