import styled from "styled-components";

export const ContainerNav = styled.div`
  //background-color: white;
  color: white;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0px 45px;
  align-items: center;
  font-size: 1.5em;
  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  color: black;
`;

export const Navigator = styled.div`
  padding: 5px;
  border: none;
  align-items: center;

  button {
    margin: 0px 25px;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-bottom: solid 1px black;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

export const DivButton = styled.button`
  border: none;
`;
