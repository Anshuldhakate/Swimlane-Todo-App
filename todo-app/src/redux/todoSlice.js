import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    moveTodo: (state, action) => {
      const { id, status } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    }
  }
});

export const { setTodos, addTodo, moveTodo } = todoSlice.actions;
export default todoSlice.reducer;
