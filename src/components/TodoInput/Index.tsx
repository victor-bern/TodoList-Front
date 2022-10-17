import { useContext } from 'react';
import { buttonDisableOrEnable, setTodoTitle } from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { Container, Input } from './styles';

type TodoInputProps = {
  title?: string;
  onChangeTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ title, onChangeTitle }) => {
  const { dispatch, state } = useContext(AppContext);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(dispatch, e.currentTarget.value);
    buttonDisableOrEnable(dispatch);
  };
  return (
    <Container>
      <Input
        value={title ?? state.todoTitle}
        onChange={onChangeTitle ?? handleOnChange}
      />
    </Container>
  );
};

export default TodoInput;
