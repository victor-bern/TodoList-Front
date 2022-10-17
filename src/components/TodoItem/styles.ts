import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
`;

export const TodoTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const CheckBox = styled.input`
  display: flex;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled(FiTrash)`
  &:hover {
    color: #ff5733;
  }
`;

type ButtonEditProps = {
  isEnable: boolean;
};

export const ButtonEdit = styled.button<ButtonEditProps>`
  border: 1px solid black;
  padding: 14px;
  border-radius: 6px;
  background-color: ${({ isEnable }) => (isEnable ? '#808080' : '#3944bc')};
  cursor: ${({ isEnable }) => (isEnable ? 'not-allowed' : 'pointer')};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
  width: fit-content;
  height: fit-content;
`;
