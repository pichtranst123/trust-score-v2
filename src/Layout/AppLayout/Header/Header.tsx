import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

// @styled-component
import {
  Layout,
  MainLayout,
  LogoContainer,
  Menu,
  MenuItem,
  MobileLayout,
  MobileMainLayout,
  MenuButton,
  ButtonGroup,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

// @assets
import LogoImage from "assets/png/Logo.png";
import { BiMenu } from "react-icons/bi";
import LogoBg from "assets/png/logo-bg.gif";

// @component
import { ConnectButton } from "components/Button";
import Container from "components/Container/Container";

// --------------------------------------------------------------

const LogoImageStyled = styled(Image)` // Wrap Image with a styled-component
  pointer-events: none; // Prevent cursor change when hovering over the image
`;

const LogoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  pointer-events: none; /* This prevents the overlay from capturing user interactions */
`;

const Header: React.FC = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(-1);

  const dropMenuRef = useRef<any>(null);
  const menuButtonRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current.contains(e.target)) {
      return;
    } else {
      if (menuButtonRef.current.contains(e.target)) {
        return;
      } else {
        setShow(-1);
      }
    }
  };

  useEffect(() => {
    if (show > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <Layout>
        <Container>
          <MainLayout>
          <LogoContainer
              onClick={() => {
                router.push("/");
              }}
              back={LogoBg.src}
              top={scrollY == 0}
            >              <LogoImageStyled src={LogoImage} alt="No Image" layout="fill" />
              <LogoOverlay />
            </LogoContainer>
            <Menu>
              <MenuItem
                onClick={() => {
                  router.push("#about");
                }}
              >
                About
              </MenuItem>

              <MenuItem
                onClick={() => {
                  router.push("#space");
                }}
              >
                Space
              </MenuItem>

              <MenuItem
                onClick={() => {
                  router.push("#roadmap");
                }}
              >
                Roadmap
              </MenuItem>
            </Menu>
            <ConnectButton />
          </MainLayout>
        </Container>
      </Layout>
      <MobileLayout>
        <Container>
          <MobileMainLayout>
            <LogoContainer onClick={() => {
                router.push("/");
              }}
              back={LogoBg.src}
              top={scrollY == 0}
            >
              <Image src={LogoImage} alt="No Image" layout="fill" />
            </LogoContainer>

            <ButtonGroup>
              <ConnectButton />
              <MenuButton
                onClick={() => {
                  setShow(show * -1);
                }}
                ref={menuButtonRef}
              >
                <BiMenu size={24} />
              </MenuButton>
            </ButtonGroup>
          </MobileMainLayout>
          <MobileMenu show={show > 0} ref={dropMenuRef}>
            <MobileMenuItem
              onClick={() => {
                router.push("#about");
                setShow(-1);
              }}
            >
              About
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#space");
                setShow(-1);
              }}
            >
              Spaces
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => {
                router.push("#roadmap");
                setShow(-1);
              }}
            >
              Roadmap
            </MobileMenuItem>
         
          </MobileMenu>
        </Container>
      </MobileLayout>
    </>
  );
};
export default Header;
