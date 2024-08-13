import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { useDrop } from 'react-dnd';
import TodoItem from './TodoItem';

// Function to get the background color based on section title (status)
const getBackgroundColor = (title) => {
  switch (title) {
    case 'ToDo':
      return '#1e1e1e'; // Dark background for 'ToDo'
    case 'In Progress':
      return '#263238'; // Lighter dark background for 'In Progress'
    case 'Done':
      return '#2c3e50'; // Different dark shade for 'Done'
    default:
      return '#1e1e1e';
  }
};

const TodoSection = ({ title, todos, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TODO',
    drop: (item) => onDrop(item.id, title),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Grid item xs={12} md={4}>
      <Paper
        ref={drop}
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: isOver ? '#333' : getBackgroundColor(title),
          minHeight: '400px',
          boxShadow: 3,
          border: '1px solid #444',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#bb86fc' }}>
          {title}
        </Typography>
        <Box>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Box>
      </Paper>
    </Grid>
  );
};

export default TodoSection;
