import React, { useState } from "react";
// @styled-components
import { Layout } from "./ButtonLogout.styled";
import { FiLogOut } from "react-icons/fi";
// @near
import { logout } from "near/utils";


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const handleLogout = () => {
    logout();
  };

  return <Layout onClick={handleLogout}><FiLogOut />&nbsp;Logout</Layout>;
};

export default ButtonLogout;
