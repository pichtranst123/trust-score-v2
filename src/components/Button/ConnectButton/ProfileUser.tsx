import {React,useEffect} from "react";
// @styled-components
import { Layout } from "./ProfileUser.styled";
import { BiUserCircle } from "react-icons/bi";
// @near
import { Wallet } from "near/near-wallet";

interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const contractId = "dev-1693129289263-20526325787540";
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

  return <Layout onClick={handleLogout}><BiUserCircle />&nbsp;Profile</Layout>;
};

export default ButtonLogout;
