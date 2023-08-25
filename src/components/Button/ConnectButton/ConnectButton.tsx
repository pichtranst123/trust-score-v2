import React, { useState , useEffect } from "react";
import MenuPlaceholder from "./MenuPlaceholer";

// @styled-components
import { Layout } from "./ConnectButton.styled";


import { Wallet } from "near/near-wallet"

interface ConnectButtonProps {}


const ConnectButton: React.FC<ConnectButtonProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accountId, setAccountId] = useState(false);
  const CONTRACT_ADDRESS = "dev-1692890433237-45573031471653";
  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign
  const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

 
 
  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      console.log(isSignedIn);
      if(isSignedIn){
        setAccountId(wallet.accountId);
      }
      
      setIsSignedIn(isSignedIn);
    };
  
    startUp()
      .catch(console.error);;
  }, [])

  const handleLogin = () => {
    if (isSignedIn) {
      setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái mở/đóng khi nhấn nút "Wallet Connect"
    } else {
      setIsMenuOpen(!isMenuOpen); // Mở menu placeholder khi chưa đăng nhập và nhấn nút "Wallet Connect"
      wallet.signIn(); // Thực hiện login khi nhấn nút "Wallet Connect"
    }
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Layout>
      <div onClick={handleLogin}>
        {isSignedIn ? (
          <div>
            {accountId.substr(0, 5) +
              "..." +
              accountId.substr(accountId.length - 4, accountId.length)}
          </div>
        ) : (
          "Wallet Connect"
        )}
      </div>
      {isMenuOpen && isSignedIn && <MenuPlaceholder isOpen={isMenuOpen} onClose={handleMenuClose} />} {}
    </Layout>
  );
};

export default ConnectButton;
