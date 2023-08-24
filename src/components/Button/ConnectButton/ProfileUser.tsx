import React from "react";
// @styled-components
import { Layout } from "./ProfileUser.styled";
import { BiUserCircle } from "react-icons/bi";
// @near
import { logout } from "near/utils";


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const handleLogout = () => {
    logout();
  };

  return <Layout onClick={handleLogout}><BiUserCircle />&nbsp;Profile</Layout>;
};

export default ButtonLogout;
