import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  position: fixed;

  top: 0;

  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f9faff;
  padding-top: 10px;

  z-index: 2;

  @media screen and (max-width: 1024px) {
    display: none;Ư
  }
`;

export const MainLayout = styled.div`
  height:100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div<{ back: any; top: boolean }>`
  margin-top: 10px;

  position: relative;

  width: 150px;
  height: 90px;

  cursor: pointer;

  ::after {
    opacity: ${({ top }: any) => (top ? "1" : "0")};
    transition: all 0.5s ease;
    position: absolute;
    content: "";
    left: -200px;
    top: -20px;
    width: 20px;
    height: 20px;
    background-image: url(${({ back }: any) => back});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 100px;

    ::after {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 135px;
    height: 90px;
  }

  @media screen and (max-width: 1024px) {
    width: 135px;
    height: 90px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 80px;
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.a`
  width: 80px;
  position: relative;

  margin: 0 10px;
  z-index: 1;

  color: black; 
  font-size: 18px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  transition: all 0.2s;
  cursor: pointer;

  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 3px;
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }

  :hover {      color:#00bacf;

     ::after {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 10);
      background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);      transform: scaleX(1);
    }
  }
`;

export const MobileLayout = styled.div`
  position: fixed;

  top: 0;

  width: 100%;

  display: none;
  background: #969696;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const MobileMainLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MenuButton = styled.div`
  width: 56px;
  height: 56px;
  margin-left: 10px;

  background: #e4f0fc;
  transition: all 0.2s ease-in-out;

  color: black;
  font-weight: 600;
  font-size: 18px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);
    box-shadow: inset 180px 0 0 0 #7efefe;
    color: black;
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-top-color: #969696;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    border-top-color: #969696;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 425px) {
    width: 45px;
    height: 45px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileMenu = styled.div<{ show: boolean }>`
  position: absolute;

  border-radius: 20px;
  top: 100px;
  left: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    top: 90px;
  }

  z-index: 2;

  visibility: ${({ show }) => (show ? "visible" : "collapse")};

  & > div {
    ${({ show }) =>
      show
        ? `opacity: 1;
      visibility: visible;
        &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.3s;
  }
  &:nth-child(5) {
    transition-delay: 0.4s;
  }
      `
        : `opacity: 0;
      visibility: hidden;
        &:nth-child(1) {
    transition-delay: 0.4s;
  }
  &:nth-child(2) {
    transition-delay: 0.3s;
  }
  &:nth-child(3) {
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    transition-delay: 0.1s;
  }`};
  }
`;

export const MobileMenuItem = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  color: black;

  cursor: pointer;

  padding: 20px;
  font-size: 16px;
  background: #7efefe;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  transition: all 0.2s;
  font-size: 20px;

  :hover,
  :focus {
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);
    color: black;
  }

  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
