import React from 'react';
import { Grid } from '@mui/material';
import TodoSection from './TodoSection';

const TodoList = ({ todos, onDrop }) => {
  const todosByStatus = {
    ToDo: [],
    InProgress: [],
    Done: [],
  };

  todos.forEach((todo) => {
    todosByStatus[todo.status].push(todo);
  });

  return (
    <Grid container spacing={2}>
      <TodoSection
        title="To Do"
        todos={todosByStatus.ToDo}
        onDrop={(id) => onDrop(id, 'ToDo')} 
      />
      <TodoSection
        title="In Progress"
        todos={todosByStatus.InProgress}
        onDrop={(id) => onDrop(id, 'InProgress')} 
      />
      <TodoSection
        title="Done"
        todos={todosByStatus.Done}
        onDrop={(id) => onDrop(id, 'Done')}  
      />
    </Grid>
  );
};

export default TodoList;
