import styled from "styled-components";
export const CardContainer = styled.div`
  width: 800px;
  //height: 65vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: column;
  //background-color: red;
`;

export const Card = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  max-height: 250px;

  img {
    width: 150px;
    height: 200px;
    padding: 15px;
    background-color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 15px;
  }
  span {
    background-color: white;
    max-width: 50%;
  }
  button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
