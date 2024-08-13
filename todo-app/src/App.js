import React, { useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, moveTodo } from './redux/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then((response) => response.json())
      .then((data) => dispatch(setTodos(data)));
  }, [dispatch]);

  const handleDrop = async (id, status) => {
    dispatch(moveTodo({ id, status }));
    
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo status');
      }
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: '#121212',
        color: '#ffffff',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <CssBaseline />
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          color: '#bb86fc',
          marginBottom: 4,
          background: 'linear-gradient(to right, #bb86fc, #03dac6)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
        }}
      >
        Todo App
      </Typography>
      <AddTodo />
      <TodoList todos={todos} onDrop={handleDrop} />
    </Container>
  );
}

export default App;
