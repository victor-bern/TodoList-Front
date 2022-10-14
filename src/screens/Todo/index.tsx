import React from 'react';
import TodoInput from '../../components/TodoInput/Index';
import TodoList from '../../components/TodoList';
import { Container } from './styles';
function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <TodoInput />

      <TodoList />
    </Container>
  );
}

export default Todo;
