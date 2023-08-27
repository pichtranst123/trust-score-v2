import styled from "styled-components";

// -----------------------------------------------------------
import bg from "assets/gif/bg-hero.gif";
const backgroundImageUrl = bg.src;

export const Layout = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center top;
  padding: 320px 0px 150px 0px;
  background-image: url(${backgroundImageUrl}); /* Thêm dòng này */

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding: 270px 0px 50px 0px;
  }

  @media screen and (max-width: 575px) {
    padding: 220px 0px 50px 0px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Collection = styled.div`
  color: #00000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const Text = styled.div`
  color: black;
  font-weight: 600;
  font-size: 56px;
  max-width: 870px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const Button = styled.div`
  width:2ê0px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    background-size: cover;
    background-position: center top;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Row = styled.div`
  margin-top: 30px;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
      margin-right: 0px;
    }
  }
`;
