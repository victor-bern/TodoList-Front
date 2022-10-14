import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.div`
  height: 700px;
  padding: 6px;
  &::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
  overflow: auto;
`;
