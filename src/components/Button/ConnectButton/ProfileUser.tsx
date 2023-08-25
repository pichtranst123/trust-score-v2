import React from "react";
// @styled-components
import { Layout } from "./ProfileUser.styled";
import { BiUserCircle } from "react-icons/Bi";
// @near
import { logout } from "near/utils";
import { useRouter } from 'next/router';


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/profile');
  };

  return <Layout onClick={handleProfileClick}><BiUserCircle />&nbsp;Profile</Layout>;
};

export default ButtonLogout;
