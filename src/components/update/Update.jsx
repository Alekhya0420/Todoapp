import React, { useState } from 'react';
import axios from 'axios';

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  console.log("userId:", userId);
  console.log("token:", token);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !token) {
      console.error("User ID or token is missing.");
      return;
    }

    await axios.post(
        `http://89.116.32.22:7702/api/update-password`,
        {
          user_id:userId, 
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      ).then((response)=>{
        console.log("Password update result:", response.data);
      })
  
  
    .catch ((error)=>console.log("error is",error)); 
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
