import { useContext } from 'react';
import { setTodoTitle } from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { Container, Input } from './styles';

const TodoInput: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Container>
      <Input
        onChange={(e) => {
          setTodoTitle(dispatch, e.currentTarget.value);
        }}
      />
    </Container>
  );
};

export default TodoInput;
