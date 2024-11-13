import axios from 'axios';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState(""); 

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("photo", photo);

    try {
      const response = await axios.post(
        "http://89.116.32.22:7702/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setMessage("Registration successful!");
      alert("Registered successfully")
      console.log("Registration successful", response.data);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error("Error during registration", error);
    }

    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setPhoto(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(rgb(10,50,50), rgb(10,50,50))',
        color: 'white',
        p: 2,
      }}
    >
      <form onSubmit={handleSubmit} style={{maxWidth: 400,width:'100%',border:"2px solid black",padding:"10px"}}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
          Register
        </Typography>
        {message && <Typography color="error" align="center">{message}</Typography>}
        
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{mb:2,backgroundColor:"white",borderRadius:2,width:"90%", boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'}}
        />
        
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mb:2,backgroundColor:"white",borderRadius:2,width:"90%", boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'}}
        />
        
        <TextField
          label="Mobile"
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          sx={{mb:2,backgroundColor:"white",borderRadius:2,width:"90%", boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'}}
        />
        
        <TextField
          label="Password"
          type="password"
          value={password}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          sx={{mb:2,backgroundColor:"white",borderRadius:2,width:"90%", boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.1)'}}
        />
        
        <input
          type="file"
          onChange={handlePhotoChange}
          style={{
              display: 'block',
              marginBottom: '16px',
              width: '85%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: 'white',
              cursor: 'pointer',
              marginLeft:"23px"
            }}
          />


        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'darkred',
            color: 'white',
            width:"90%",
            '&:hover': { backgroundColor: 'red' },
          }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
