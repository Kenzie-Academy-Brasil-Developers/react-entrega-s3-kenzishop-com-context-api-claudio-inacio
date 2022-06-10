import styled from "styled-components";

export const CountainerCarte = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountainerProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DivTotal = styled.div`
  background-color: white;
  max-width: 300px;
  height: 200px;
  align-items: center;
  margin-top: 10%;
  padding: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  h1 {
    background-color: white;
    font-size: 30px;
  }
  span {
    background-color: white;
    margin: 20px;
  }
`;

export const Resumo = styled.div`
  background-color: white;
`;
