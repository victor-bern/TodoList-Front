import { useContext } from 'react';
import { addTodo } from '../../actions/todoActions';
import { AppContext } from '../../context/appContext';
import { Button } from './styles';

const AddButton = () => {
  const { dispatch, state } = useContext(AppContext);
  return (
    <Button
      isEnable={state.buttonEnable}
      disabled={state.buttonEnable}
      onClick={() => {
        addTodo(dispatch);
      }}
    >
      Add
    </Button>
  );
};

export default AddButton;
