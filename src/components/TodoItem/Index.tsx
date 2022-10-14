import { ITodo } from '../../types/ITodo';
import { CheckBox, Container, TodoTitle } from './styles';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Container>
      <TodoTitle>{todo.title}</TodoTitle>
      <CheckBox type='checkbox' checked={todo.isDone} />
    </Container>
  );
};

export default TodoItem;
