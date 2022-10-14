import React from 'react';
import AddButton from '../../components/AddButton/Index';
import TodoInput from '../../components/TodoInput/Index';
import TodoList from '../../components/TodoList';
import { ITodo } from '../../types/ITodo';
import { Container, InputContainer } from './styles';
function Todo() {
  var list: ITodo[] = [
    { id: 1, title: 'Titulo', isDone: false },
    { id: 2, title: 'Titulo2', isDone: false },
  ];
  return (
    <Container>
      <h1>Todo</h1>
      <InputContainer>
        <TodoInput />
        <AddButton />
      </InputContainer>

      <TodoList todos={list} />
    </Container>
  );
}

export default Todo;
