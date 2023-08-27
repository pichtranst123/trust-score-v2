import styled from "styled-components";
import Link from "next/link";

// -----------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 350px;
  padding: 20px;
  background: #7efefe;
  overflow: hidden;
  border-left: 14px;
  border-bottom: 24x; 

  box-shadow: 0 12px 28px rgba(0, 0, 0, 10);
  transition: box-shadow 0.4s ease-in-out;
  --bg-color: #7efefe;
  --main-color: #323232;
    box-shadow: 8px 8px var(--main-color);
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 24px;
`;
export const IconButton = styled.a`
  display: inline-block;
  color: black;
  margin-right: 10px;
  text-decoration: none;
  color: #000; /* Change the color to your desired color */
`;
export const ImageLayout = styled.div`
  position: relative;
  border-radius: 20px;

  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 14px;

  transition: box-shadow 0.4s ease-in-out;

`;
export const Title = styled.div`
  width: 100%;
  text-align: center;

  margin-top: 20px;

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
  width: 100%;
  text-align: center;

  margin-top: 20px;

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
  transform: translateY(110%);

  ${Layout}:hover & {
    transform: translate(0px);
    visibility: visible;
  }
`;
export const Follower = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 600;
`;

export const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  background: #7efefe;
  border: 3px solid black;
  padding: 5px; 
  margin-right: 10px; 
  border-radius:8px;
  :hover{
  background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }

`;
export const Icon = styled(Link)`
  cursor: pointer;
`;
