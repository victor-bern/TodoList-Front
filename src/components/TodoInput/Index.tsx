import { useContext } from 'react';
import { ButtonDisableOrEnable, setTodoTitle } from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { Container, Input } from './styles';

const TodoInput: React.FC = () => {
  const { dispatch, state } = useContext(AppContext);
  return (
    <Container>
      <Input
        value={state.todoTitle}
        onChange={(e) => {
          setTodoTitle(dispatch, e.currentTarget.value);
          ButtonDisableOrEnable(dispatch);
        }}
      />
    </Container>
  );
};

export default TodoInput;
