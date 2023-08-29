import styled from "styled-components";
const Button = styled.button`
  width: 160px;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 8px;
  font-weight:bold
  color: black;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  border: 2px solid;
  background: #7efefe;
  box-shadow: 5px 5px black;
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  :hover {
    border: 3px solid;
  }
`;