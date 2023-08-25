import {React,useEffect} from "react";
// @styled-components
import { Layout } from "./ProfileUser.styled";
import { BiUserCircle } from "react-icons/bi";
// @near
import { Wallet } from "near/near-wallet";

interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
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

  return <Layout onClick={handleLogout}><BiUserCircle />&nbsp;Profile</Layout>;
};

export default ButtonLogout;
