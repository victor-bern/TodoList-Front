import { changeStatustodo } from '../../services/todoService';
import { ITodo } from '../../types/ITodo';
import { CheckBox, Container, TodoTitle } from './styles';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const onCheckHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await changeStatustodo(todo.id!);
  };

  return (
    <Container>
      <TodoTitle>{todo.title}</TodoTitle>
      <CheckBox
        type='checkbox'
        onChange={onCheckHandler}
        defaultChecked={todo.isDone}
      />
    </Container>
  );
};

export default TodoItem;
