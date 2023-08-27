import {React,useEffect} from "react";
// @styled-components
import { Layout } from "./ProfileUser.styled";
import { BiUserCircle } from "react-icons/bi";
// @near
import { Wallet } from "near/near-wallet";
import { useRouter } from 'next/router';

interface ButtonLogoutProps {}

const ButtonLogout: React.FC<ButtonLogoutProps> = () => {
  const contractId = process.env.NEXT_PUBLIC_CONTRACT_NAME;
  const wallet = new Wallet({ createAccessKeyFor: contractId });
  const router = useRouter();
  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
    };

    startUp()
      .catch(console.error);;
  }, [])
  const gotoProfile = async() => {
    router.push(`/profile`);
  };

  return <Layout onClick={gotoProfile}><BiUserCircle />&nbsp;Profile</Layout>;
};

export default ButtonLogout;
