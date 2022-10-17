import styled from 'styled-components';

type ButtonProps = {
  isEnable: boolean;
};

export const Button = styled.button<ButtonProps>`
  border: 1px solid black;
  padding: 14px;
  border-radius: 6px;
  background-color: ${({ isEnable }) => (isEnable ? '#808080' : '#3944bc')};
  cursor: ${({ isEnable }) => (isEnable ? 'not-allowed' : 'pointer')};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: white;
`;
