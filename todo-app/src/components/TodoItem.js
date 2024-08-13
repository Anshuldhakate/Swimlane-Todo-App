import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';

// Function to get card color based on todo status
const getCardColor = (status) => {
  switch (status) {
    case 'ToDo':
      return '#ff8a80'; // Light red for 'ToDo'
    case 'In Progress':
      return '#ffeb3b'; // Light yellow for 'In Progress'
    case 'Done':
      return '#66bb6a'; // Light green for 'Done'
    default:
      return '#ffffff';
  }
};

const TodoItem = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TODO',
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Paper
      ref={drag}
      elevation={1}
      sx={{
        padding: 2,
        marginBottom: 2,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        border: '1px solid #333',
        borderRadius: 1,
        backgroundColor: getCardColor(todo.status),
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#000000' }}>
        {todo.title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#110000' }}>
        {todo.details}
      </Typography>
    </Paper>
  );
};

export default TodoItem;
