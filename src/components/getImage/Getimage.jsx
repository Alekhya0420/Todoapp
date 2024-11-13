import { Box } from '@mui/material';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Getimage = () => {
    const[myimage,setImage]=useState("");
    const {id}=useParams();
    console.log("id is",id)

    async function fetchImg()
    {
        await axios.get(`http://89.116.32.22:7702/api/blog/image/${id}`,{
            responseType:'blob'
        })

        .then((res)=>{
            console.log("result is",res.data)
            const imageuRl=URL.createObjectURL(res.data)
            setImage(imageuRl)
        })

        .catch((error)=>console.log("error is",error));
    }

    useEffect(()=>{
     fetchImg()
    },[])

    console.log("myy image is",myimage);

  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <img src={myimage}
        style={{ 
         
            objectFit: 'contain' 
          }} 
        ></img>
    </Box>
  )
}

export default Getimage