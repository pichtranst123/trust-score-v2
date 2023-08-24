import React from "react";
import { MenuOverlay } from "./MenuPlaceholer.styled";
import ButtonLogout from "./ButtonLogout";
import ProfileUser from "./ProfileUser";
import Test from "./Test";

interface MenuPlaceholderProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPlaceholder: React.FC<MenuPlaceholderProps> = ({ isOpen, onClose }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Kiểm tra nếu người dùng nhấn ra bên ngoài thì đóng menu
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <MenuOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ProfileUser />
      <Test />
      <ButtonLogout />
    </MenuOverlay>
  );
};

export default MenuPlaceholder;
