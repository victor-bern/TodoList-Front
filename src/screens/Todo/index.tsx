import React from 'react';
import AddButton from '../../components/AddButton/Index';
import TodoInput from '../../components/TodoInput/Index';
import TodoList from '../../components/TodoList';
import { Container, InputContainer } from './styles';
function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <InputContainer>
        <TodoInput />
        <AddButton />
      </InputContainer>

      <TodoList />
    </Container>
  );
}

export default Todo;
