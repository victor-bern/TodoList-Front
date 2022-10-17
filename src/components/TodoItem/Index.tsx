import {
  changeStatustodo,
  deleteTodo,
  editTodo,
} from '../../services/todoService';
import { ITodo } from '../../types/ITodo';
import { FiCheck, FiEdit } from 'react-icons/fi';
import {
  ActionsContainer,
  ButtonEdit,
  CheckBox,
  Container,
  Icon,
  TodoTitle,
} from './styles';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { editTodoTitle, removeTodo } from '../../actions/todoActions';
import TodoInput from '../TodoInput/Index';

type TodoItemProps = {
  todo: ITodo;
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useContext(AppContext);
  const [isDone, setIsDone] = useState(todo.isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const [isEnable, setIsEnable] = useState(editText.length <= 0);

  const onClickDeleteHandler = async (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    await deleteTodo(todo.id!);
    removeTodo(dispatch, todo);
  };

  const onCheckHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await changeStatustodo(todo.id!);
    setIsDone(true);
    setIsEditing(false);
  };

  const handleClickButtonStartEdit = () => {
    setIsEditing(true);
  };

  const handleButtonEditClick = async () => {
    if (editText.length <= 0) return;
    setIsEditing(false);
    editTodoTitle(dispatch, { ...todo, title: editText });
    await editTodo({ ...todo, title: editText });
  };

  const handleEditTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEnable(true);
    if (e.currentTarget.value.length > 0) {
      setIsEnable(false);
    }
    setEditText(e.currentTarget.value);
  };

  return (
    <Container>
      {isEditing ? (
        <>
          <TodoInput title={editText} onChangeTitle={handleEditTextInput} />
          <ButtonEdit isEnable={isEnable} onClick={handleButtonEditClick}>
            Edit
          </ButtonEdit>
        </>
      ) : (
        <TodoTitle>{editText}</TodoTitle>
      )}
      {isDone ? (
        <ActionsContainer>
          <FiEdit onClick={handleClickButtonStartEdit} />
          <FiCheck data-testid='checkIconID' role={'img'} />
          <Icon onClick={onClickDeleteHandler} role={'img'} />
        </ActionsContainer>
      ) : (
        <ActionsContainer>
          <FiEdit onClick={handleClickButtonStartEdit} />
          <CheckBox
            type='checkbox'
            onChange={onCheckHandler}
            defaultChecked={todo.isDone}
          />
          <Icon onClick={onClickDeleteHandler} role={'img'} />
        </ActionsContainer>
      )}
    </Container>
  );
};

export default TodoItem;
