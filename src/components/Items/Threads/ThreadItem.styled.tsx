import styled from "styled-components";
// -----------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  justify-content: left;
  width: 100%;
  max-width: 660px;
  height: 220px;
  border-radius: 8px;
  padding: 20px;
  background: white;
  overflow: hidden;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 8);
  transition: box-shadow 0.4s ease-in-out;
  :hover {
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;
export const IconButton = styled.a`
  display: inline-block;
  color: black;
  margin-right: 10px;
  text-decoration: none;
  color: #000; 
`;
export const ImageLayout = styled.div`
  position: relative;
  width: 35px;
  height:35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 24px;

  transition: box-shadow 0.4s ease-in-out;

`;

export const Time = styled.div`
  width: 100%;

  margin-top: -50px;
  color: black;
  font-size: 10px;
  font-weight: 600;
`;

export const Contract = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  margin-top: 27px;
  margin-left: 38px;

  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 44px;

  color: black;
  font-size: 20px;
  font-weight: 600;
`;
export const Des = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 10px;

  color: rgb(135, 141, 149);
  font-size: 15px;
`;
export const TP = styled.div`
  position: absolute;
  top: 0;
  right: 0; /* Đặt bên phải */
  margin-top: 0px;

  color: black;
  font-size: 20px;
  font-weight: 600;
`;
export const Detail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40%;
  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  transition: all 0.3s;

  visibility: hidden;
`;


