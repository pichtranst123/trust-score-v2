import React, { useState , useEffect } from "react";
// @styled-components
import { Layout } from "./ButtonLogout.styled";
import { FiLogOut } from "react-icons/fi";
// @near
import { Wallet } from "near/near-wallet";


interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const CONTRACT_ADDRESS = "dev-1692890433237-45573031471653";
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

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

  return <Layout onClick={handleLogout}><FiLogOut />&nbsp;Logout</Layout>;
};

export default ButtonLogout;
