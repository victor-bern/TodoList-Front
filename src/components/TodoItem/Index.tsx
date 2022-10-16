import { changeStatustodo, deleteTodo } from '../../services/todoService';
import { ITodo } from '../../types/ITodo';
import { FiCheck } from 'react-icons/fi';
import {
  ActionsContainer,
  CheckBox,
  Container,
  Icon,
  TodoTitle,
} from './styles';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { removeTodo } from '../../actions/todoActions';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useContext(AppContext);
  const [isDone, setIsDone] = useState(todo.isDone);

  const onClickDeleteHandler = async (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    console.log('AAA');
    await deleteTodo(todo.id!);
    removeTodo(dispatch, todo);
  };

  const onCheckHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await changeStatustodo(todo.id!);
    setIsDone(true);
  };
  useEffect(() => {}, [todo.isDone]);
  return (
    <Container>
      <TodoTitle>{todo.title}</TodoTitle>
      {isDone ? (
        <ActionsContainer>
          <FiCheck role={'img'} />
          <Icon onClick={onClickDeleteHandler} role={'img'} />
        </ActionsContainer>
      ) : (
        <ActionsContainer>
          <CheckBox
            type='checkbox'
            onChange={onCheckHandler}
            defaultChecked={todo.isDone}
          />
          <Icon onClick={onClickDeleteHandler} role={'img'} />
        </ActionsContainer>
      )}
    </Container>
  );
};

export default TodoItem;
