// import axios from 'axios';
// import React,{useState} from 'react'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   localStorage.clear();

//   const handleSubmit=async(event)=>{
//   event.preventDefault();
//   await axios.post(`http://89.116.32.22:7702/api/login`,{email,password})
//   .then((response)=>{
   
//     const accessToken = response.data.token;
//     const userId = response.data.user._id;
//     console.log("response is",response);
//     console.log("userId is",userId);
//     console.log("access token",accessToken);
//     localStorage.setItem('userId',response.data.user._id)
//     localStorage.setItem("token",accessToken);
//   })

//   .catch((error)=>console.log("case is",error));

//   }

//   return (
//     <div>
//     <h2>Login</h2>
//     <form onSubmit={handleSubmit}>
//         <input 
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//         />
//         <input 
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//         />
//         <button type="submit">Login</button>
//     </form>
//     {/* {message && <p>{message}</p>} */}
// </div>
//   )
// }

// export default Login


import axios from 'axios';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post(`http://89.116.32.22:7702/api/login`, { email, password })
      .then((response) => {
        alert("congratulations!login successful")
        console.log("Response is:", response);
        const accessToken = response.data.token;
        const userId = response.data.user._id;
        console.log("User ID is:", userId);
        console.log("Access Token:", accessToken);
        localStorage.setItem('userId', userId);
        localStorage.setItem("token", accessToken);
        setMessage("Login successful!");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setMessage("Login failed. Please try again.");
      });
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
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, width: '100%', border: "2px solid black", padding: "10px",boxShadow:"20px" }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
          Login
        </Typography>
        {message && <Typography color="error" align="center">{message}</Typography>}
        
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: "white",
            borderRadius: 2,
            width: "90%",
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: "white",
            borderRadius: 2,
            width: "90%",
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'darkred',
            color: 'white',
            width: "90%",
            '&:hover': { backgroundColor: 'red' },
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
