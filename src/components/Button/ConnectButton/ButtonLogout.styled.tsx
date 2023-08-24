import styled from "styled-components";

// -----------------------------------------------------------
import { ConnectButtonWidth, ConnectButtonHeight } from "./ConnectButton.styled"; // Import biến từ ConnectButton


export const Layout = styled.div`
  position: relative;
  width: ${ConnectButtonWidth};
  height: 50px;
  border-radius: 0 0 12px 12px;
  border: 2px solid;
  background: white;

  color: black;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-out;

  :hover,
  :focus {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 2); 
    background: linear-gradient(90deg, rgba(147,231,229,1) 0%, rgba(0,186,207,1) 42%, rgba(6,23,27,1) 100%);
    color: black;
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    transform: rotate(135deg);
  }

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    transform: rotate(-45deg);
    
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 50px;
    font-size: 14px;
  }
  @media screen and (max-width: 912px) {
    width: 150px;
    height: 34%;
    font-size: 14px;
  }
  

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 34%;
    font-size: 14px;
  }

  @media screen and (max-width: 425px) {
    width: 110px;
    height: 50px;
  }
`;