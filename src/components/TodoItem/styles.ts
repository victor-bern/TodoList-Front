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
