import { useContext, useEffect } from 'react';
import { fecthTodos } from '../../actions/todoActions';
import AddButton from '../../components/AddButton/Index';
import TodoInput from '../../components/TodoInput/Index';
import TodoList from '../../components/TodoList';
import { AppContext } from '../../context/appContext';
import { getAllTodos } from '../../services/todoService';
import { Container, InputContainer, ListContainer } from './styles';
function Todo() {
  const { dispatch, state } = useContext(AppContext);
  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllTodos();
      fecthTodos(dispatch, items);
    };
    fetchItems();
  }, [dispatch]);

  return (
    <Container>
      <h1>Todo</h1>
      <InputContainer>
        <TodoInput />
        <AddButton />
      </InputContainer>
      <ListContainer>
        <TodoList todos={state.todos} />
      </ListContainer>
    </Container>
  );
}

export default Todo;
