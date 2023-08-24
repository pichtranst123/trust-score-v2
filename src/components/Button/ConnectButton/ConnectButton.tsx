import React, { useState } from "react";
import MenuPlaceholder from "./MenuPlaceholer";

// @styled-components
import { Layout } from "./ConnectButton.styled";

// @near
import { login } from "near/utils";

interface ConnectButtonProps {}

const ConnectButton: React.FC<ConnectButtonProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSignedIn = window?.walletConnection?.isSignedIn();
  const accountId = window.accountId;

  const handleLogin = () => {
    if (isSignedIn) {
      setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái mở/đóng khi nhấn nút "Wallet Connect"
    } else {
      setIsMenuOpen(!isMenuOpen); // Mở menu placeholder khi chưa đăng nhập và nhấn nút "Wallet Connect"
      login(); // Thực hiện login khi nhấn nút "Wallet Connect"
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
