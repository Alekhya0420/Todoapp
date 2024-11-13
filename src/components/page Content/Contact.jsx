import React,{useState} from 'react'
import axios from 'axios'
import {Box,TextField,InputProps,InputLabelProps, Button} from '@mui/material'


const Contact = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[message,setMsg]=useState("");

    let handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post(`http://89.116.32.22:7702/api/contact/create`,{name,email,phone,message})
    .then((res)=>{
        console.log("form res is",res)
        alert("post submitted succesfully");
    })

    .catch((error)=>console.log("error is",error))
    }


  return (
    <Box sx={{paddingBottom:"20px"}}>
    <form onSubmit={handleSubmit} style={{border:"2px solid black",width:'40%',margin:"auto",boxShadow: "0px 4px 8px rgba(90, 255, 255, 0.3)"}}>
      <h2 style={{color:"white"}}>Submit Contact</h2>
      <div>
        
        <TextField
          label="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          defaultValue="Small"
          style={{color:'white',backgroundColor:'#333',borderRadius:'1px',width:'80%',margin:"10px"}}
          InputProps={{
            style: { color: 'white' }, 
          }}
          InputLabelProps={{
            style: {color: 'white'},
          }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          defaultValue="Normal"
          style={{color:'white',backgroundColor:'#333',borderRadius:'1px',width:'80%',marginBottom:"10px"}}
          InputProps={{
            style: { color: 'white' }, 
          }}
          InputLabelProps={{
            style: {color: 'white'},
          }}
        />
      </div>
      <div>
        <TextField
          label="Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          defaultValue="Small"
          style={{color: 'white',backgroundColor: '#333',borderRadius:'1px',width:'80%',marginBottom:"10px"}}
          
          InputProps={{
            style: { color: 'white' }, 
          }}
          InputLabelProps={{
            style: {color: 'white'},
          }}
        />

        <TextField
          label="Message"
          value={message}
          onChange={(e)=>setMsg(e.target.value)}
          defaultValue="Normal"
          style={{color: 'white',backgroundColor: '#333',borderRadius:'1px',width:'80%',marginBottom:"10px"}}

          InputProps={{
            style: { color: 'white' }, 
          }}
          InputLabelProps={{
            style: {color: 'white'},
          }}
        /><br></br>

        <Button sx={{backgroundColor:"green",color:"white",width:"80%",marginBottom:"10px"}}
        type='submit'
        >Submit</Button> 
      </div>
    </form>
    </Box>

  )
}

export default Contact