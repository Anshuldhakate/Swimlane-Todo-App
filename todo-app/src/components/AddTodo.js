import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Box, Paper, Typography } from '@mui/material';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const addNewTodo = async () => {
    if (title && details) {
      const newTodo = { id: Date.now(), title, details, status: 'ToDo' };

      try {
        dispatch(addTodo(newTodo));

        const response = await fetch('http://localhost:5000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });

        if (!response.ok) {
          throw new Error('Failed to add todo');
        }

        setTitle('');
        setDetails('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 4,
      }}
    >
      <Paper
        sx={{
          padding: 3,
          maxWidth: 400,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          border: '1px solid #333',
          backgroundColor: '#1e1e1e',
        }}
      >
        <Typography variant="h6" gutterBottom align="center" sx={{ color: '#ffffff' }}>
          Add New Todo
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Todo Title"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
            sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { color: '#ffffff' } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="Details"
            variant="outlined"
            value={details}
            onChange={handleDetailsChange}
            multiline
            rows={1}
            sx={{ marginBottom: 2, '& .MuiOutlinedInput-root': { color: '#ffffff' } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
          />
          <Button variant="contained" color="primary" onClick={addNewTodo}>
            Add Todo
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddTodo;
