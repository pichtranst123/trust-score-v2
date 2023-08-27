import React, { useState , useEffect } from "react";
// @styled-components
import { Layout } from "./Test.styled";
import { HiOutlineMail } from "react-icons/hi";
// @near
import { Wallet } from "near/near-wallet";


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
    const contractId = process.env.NEXT_PUBLIC_CONTRACT_NAME;
    const wallet = new Wallet({ createAccessKeyFor: contractId });
    useEffect(() => {
        const startUp = async () => {
          const isSignedIn = await wallet.startUp();
        };
    
        startUp()
          .catch(console.error);;
      }, [])
  const handleLogout = () => {
    wallet.signOut();
  };

  return <Layout onClick={handleLogout}><HiOutlineMail />&nbsp;Email</Layout>;
};

export default ButtonLogout;