import { changeStatustodo } from '../../services/todoService';
import { ITodo } from '../../types/ITodo';
import { FiCheck } from 'react-icons/fi';
import { CheckBox, Container, TodoTitle } from './styles';
import { useEffect, useState } from 'react';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.isDone);
  const onCheckHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await changeStatustodo(todo.id!);
    setIsDone(true);
  };
  useEffect(() => {}, [todo.isDone]);
  return (
    <Container>
      <TodoTitle>{todo.title}</TodoTitle>
      {isDone ? (
        <FiCheck />
      ) : (
        <CheckBox
          type='checkbox'
          onChange={onCheckHandler}
          defaultChecked={todo.isDone}
        />
      )}
    </Container>
  );
};

export default TodoItem;
