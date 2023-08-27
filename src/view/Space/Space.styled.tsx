import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  padding: 0px 0px 50px 0px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding: 0px 0px 50px 0px;
  }

  @media screen and (max-width: 575px) {
    padding: 150px 0px 50px 0px;
  }
`;

const Button = styled.button`
  margin-right: 240px;
  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 18px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemLayout = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  color: black;
  margin: 0;
  z-index: 2;
`;
