import { ITodo } from '../../types/ITodo';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <h1>{todo.title}</h1>;
};

export default TodoItem;
