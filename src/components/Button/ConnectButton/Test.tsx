import React from "react";
// @styled-components
import { Layout } from "./Test.styled";
import { HiOutlineMail } from "react-icons/hi";
// @near
import { logout } from "near/utils";


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const handleLogout = () => {
    logout();
  };

  return <Layout onClick={handleLogout}><HiOutlineMail />&nbsp;Email</Layout>;
};

export default ButtonLogout;
