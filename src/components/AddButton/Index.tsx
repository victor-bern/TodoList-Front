import { useContext } from 'react';
import {
  addTodo,
  buttonDisableOrEnable,
  cleanTodoInput,
} from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { saveTodo } from '../../services/todoService';
import { Button } from './styles';

const AddButton = () => {
  const { dispatch, state } = useContext(AppContext);
  return (
    <Button
      isEnable={state.buttonEnable}
      disabled={state.buttonEnable}
      onClick={async () => {
        var response = await saveTodo(state.todoTitle);
        addTodo(dispatch, response);
        cleanTodoInput(dispatch);
        buttonDisableOrEnable(dispatch);
      }}
    >
      Add
    </Button>
  );
};

export default AddButton;
