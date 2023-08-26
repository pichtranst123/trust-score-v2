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
  const contractId = "dev-1692873860524-71333580447043";
  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign
  const wallet = new Wallet({ createAccessKeyFor: contractId });

 
 
  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      console.log(isSignedIn);
      if(isSignedIn){
        setAccountId(wallet.accountId);
        const checkUserExist = await wallet.viewMethod({ method: "get_user_metadata_by_user_id",args:{"user_id":wallet.accountId},contractId})
        console.log(checkUserExist);
        if(!checkUserExist){
            await wallet.callMethod({ method: "create_user",args:{"nickname":"","first_name":"","last_name":"", "bio":"this is my bio" ,"avatar":"bafkreibnaelo4monu6jpndqtb3pmza22j7k77gcak3xrux6mrkdq5fakuu"},contractId})
            await wallet.callMethod({ method: "active_user_role",args:{"user_id":wallet.accountId},contractId});
            console.log("register done");
        }
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
