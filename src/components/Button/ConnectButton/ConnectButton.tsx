import React, { useState } from "react";
import MenuPlaceholder from "./MenuPlaceholer";

// @styled-components
import { Button } from "./ConnectButton.styled";

// @near
import { login } from "near/utils";

interface ConnectButtonProps {}

const ConnectButton: React.FC<ConnectButtonProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isSignedIn = window?.walletConnection?.isSignedIn();
  const accountId = window.accountId;

  const handleLogin = () => {
    if (isSignedIn) {
      setIsMenuOpen(!isMenuOpen);
    } else {
      setIsMenuOpen(!isMenuOpen); 
      login(); 
    }
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Button>
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
    </Button>
  );
};

export default ConnectButton;
