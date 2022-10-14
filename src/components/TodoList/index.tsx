import { ITodo } from '../../types/ITodo';
import TodoItem from '../TodoItem/Index';

type TodoListProps = {
  todos: ITodo[];
};
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  todos.sort((a, b) => a.id! - b.id!);
  return (
    <>
      {todos.map((item) => {
        return <TodoItem key={item.id} todo={item} />;
      })}
    </>
  );
};

export default TodoList;
