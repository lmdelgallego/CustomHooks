import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    });
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: todoId
    });
  };

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: todoId
    });
  };

  return {
    todos,
    pendingTodo: todos.filter((todo) => !todo.done).length,
    todosCount: todos.length,
    handleNewTodo,
    handleDelete,
    handleToggleTodo
  };
};
