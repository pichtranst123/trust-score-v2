import styled from "styled-components";

// -----------------------------------------------------------
export const ConnectButtonWidth = "180px"; // Giá trị width của button connect
export const ConnectButtonHeight = "56px"; // Giá trị height của button connect


export const Layout = styled.div`
&& {
  width:140px;
  height:50px;
  border-radius: 24px;
  border: 2px solid;
  background: #7efefe;
  cursor: pointer;
  margin: 35px 0;
  --bg-color: #7efefe;
  --main-color: #323232;
    box-shadow: 4px 4px var(--main-color);
  background: var(--bg-color);
  border: 2px solid var(--main-color);

  transition: all 0.2s ease-out;

  :hover,
  :focus {
    background: linear-gradient(90deg, rgba(147, 231, 229, 1) 0%, rgba(0, 186, 207, 1) 42%, rgba(6, 23, 27, 1) 100%);
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
}`;