import { useContext } from 'react';
import { addTodo, fecthTodos } from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { SaveTodo } from '../../services/todoService';
import { Button } from './styles';

const AddButton = () => {
  const { dispatch, state } = useContext(AppContext);
  return (
    <Button
      isEnable={state.buttonEnable}
      disabled={state.buttonEnable}
      onClick={async () => {
        var response = await SaveTodo(state.todoTitle);
        addTodo(dispatch, response);
      }}
    >
      Add
    </Button>
  );
};

export default AddButton;
