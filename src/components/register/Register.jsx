import axios from 'axios';
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const {register, handleSubmit, formState: {errors}} = useForm();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = async (data) => {
   
    
    let formData={
    "title":title,
    "description":description,
    "date":date,
    "isCompleted":isCompleted,
    "photo":photo
   }

    try {
      // Make the API request to submit the data
      await axios.post("http://localhost:4000/todolist", formData);
      setMessage("Registration successful!");
      swal({
        title: "Congratulations!",
        text: "Your registration is successful",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error);
      swal({
        title: "Error",
        text: "Registration failed",
        icon: "error",
      });
    }

    // Reset the form fields after submission
    setTitle("");
    setDescription("");
    setDate("");
    setIsCompleted("");
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
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, width: '100%', border: "2px solid black", padding: "10px" }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
          Submit
        </Typography>
        {message && <Typography color="error" align="center">{message}</Typography>}

   
        <TextField
          type='text'
          label="Title"
          variant="outlined"
          value={title}
          {...register('title', { required: 'Title is required' })}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 2, width: "90%", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        {errors.title && <Typography color="error" sx={{ mb: 2 }}>{errors.title.message}</Typography>}

        <TextField
          type='text'
          label="Description"
          variant="outlined"
          value={description}
          {...register('description', { required: 'Description is required' })}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 2, width: "90%", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        {errors.description && <Typography color="error" sx={{ mb: 2 }}>{errors.description.message}</Typography>}

     
        <TextField
          type='date'
          variant="outlined"
          value={date}
          {...register('date', { required: 'Date is required' })}
          onChange={(e) => setDate(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 2, width: "90%", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        {errors.date && <Typography color="error" sx={{ mb: 2 }}>{errors.date.message}</Typography>}

       
        <TextField
          label="Work Status"
          type="text"
          value={isCompleted}
          {...register('isCompleted', { required: 'Work status is required' })}
          onChange={(e) => setIsCompleted(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 2, width: "90%", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        />
        {errors.isCompleted && <Typography color="error" sx={{ mb: 2 }}>{errors.isCompleted.message}</Typography>}

      
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
            marginLeft: "23px"
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
          Todo List
        </Button>
      </form>
    </Box>
  );
};

export default Register;
