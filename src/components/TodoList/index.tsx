import { ITodo } from '../../types/ITodo';
import TodoItem from '../TodoItem/Index';

type TodoListProps = {
  todos: ITodo[];
};
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((item) => {
        return <TodoItem key={item.id} todo={item} />;
      })}
    </>
  );
};

export default TodoList;
