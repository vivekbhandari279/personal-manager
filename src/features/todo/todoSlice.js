import { createSlice, nanoid } from "@reduxjs/toolkit";

const todos = JSON.parse(localStorage.getItem("todos"));
const initialState = {
  todos: todos,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload != todo.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.todo = action.payload.todo;
        } else {
          todo = todo;
        }
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    markStatus: (state, action) => {
      state.todos.map((todo) => {
        todo.id == action.payload ? (todo.completed = !todo.completed) : todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, updateTodo, removeTodo, markStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
