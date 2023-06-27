import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  font-size: 20px;

  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Search = styled.div`
    border: 1px solid black;

    input::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-weight: 300;
  }

  input:focus::placeholder {
    color: transparent;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  font-weight: 300;
  font-size: 14px;
  border: 1 px solid #f78f3f;
  background-color: #f78f3f;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9); 
  }
`;