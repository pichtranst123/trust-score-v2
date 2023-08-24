import styled from "styled-components";
import { ConnectButtonWidth, ConnectButtonHeight } from "./ConnectButton.styled"; // Import biến từ ConnectButton

export const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  border-radius: 14px;
  top: 100px;
  width: ${ConnectButtonWidth};
  height: ${({ isOpen }) => (isOpen ? "150px" : "0")}; /* Tăng độ cao để hiển thị menu */
  background-color: rgba(0, 0, 0, 9);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: height 1s ease;
  
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 15%;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 15%;
    font-size: 14px;
  }

  @media screen and (max-width: 425px) {
    width: 110px;
    height: 15%;
  }
`;