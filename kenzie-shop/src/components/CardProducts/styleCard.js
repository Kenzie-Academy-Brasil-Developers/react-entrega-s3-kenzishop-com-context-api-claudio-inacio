import styled from "styled-components";
export const CardContainer = styled.div`
  //width: 800px;
  max-height: 70vh;
  font-size: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: column;
`;

export const Card = styled.div`
  max-width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  max-height: 500px;
  //max-height: 400px;

  img {
    width: 150px;
    height: 200px;
    background-color: green;

    background-color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  span {
    background-color: white;
  }
  button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
