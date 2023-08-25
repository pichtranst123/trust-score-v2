import React, { useState } from "react";
import styled from "styled-components";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title,  } from "./Space.styled";

// @component
import { Spaces } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaPlus } from "react-icons/fa";
import Image1 from "assets/png/img1.webp";
import Image2 from "assets/png/uniswap.webp";
import Image3 from "assets/png/pancakeswap.png";
import Image4 from "assets/png/theopendao.webp";
import Image5 from "assets/png/Edu.png";
import Image6 from "assets/png/op.png";

const NameSpace = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const IdSpace = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Description = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 8px;
  border: 2px solid;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border: 6px solid;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Button = styled.button`
  margin-left:10px;
  padding: 10px 20px;
  font-weight: bold; /* Make the text bold */
  font-size: 16px; /* Adjust the font size */
  color: black;
  background: transparent;
  border: 3px solid;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;
const ButtonCreate = styled.button`
  font-weight: bold; /* Make the text bold */
  font-size: 16px; /* Adjust the font size */
  color: black;
  background: transparent;
  border: 3px solid;
  margin-left:20px;
  width:200px;
  height: 50px;
  padding: 10px 10px;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;


const ButtonCreated = styled.button`

  padding: 10px 10px;
  font-weight: bold; /* Make the text bold */
  font-size: 16px; /* Adjust the font size */
  color: black;
  background: transparent;
  border: 3px solid;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;

const Spaceinfo = [
  {
    image: Image1,
    title: "DAO",
    description: "DAO Arbitrum",
    trustpoint: 20000,
    follower: "100,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image3,
    title: "Pancake Swap",
    description: "Pancake Swap Community",
    trustpoint: 10000,
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image2,
    title: "Uni Swap",
    description: "Uni Swap Community",
    trustpoint: 8000,

    follower: "70,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image6,
    title: "Optimism",
    description: "Layer2",
    trustpoint: 18000,

    follower: "20,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread"}],
  },
  {
    image: Image4,
    title: "OpenSea",
    description: "OpenSea marketplace",
    trustpoint: 5000,

    follower: "50,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    trustpoint: 2000,

    follower: "33,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
];
// ----------------------------------------------------------

Spaceinfo.sort((a, b) => b.trustpoint - a.trustpoint);

export default function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout id="space">
      <Container>
        <Title>Spaces</Title>
        <ButtonCreate onClick={openModal}>Create Space</ButtonCreate>
        <br />
        <br /><br />
        <MainLayout>
          {Spaceinfo.map((item, index) => (
            <ItemLayout key={index}>
              <Spaces data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
      {isModalOpen && (
        <Overlay id="modalOverlay">
          <Modal>
            <ModalContent>
              <NameSpace type="text" placeholder="Name" />
              <IdSpace type="text" placeholder="ID" />
              <Description placeholder="Description" />
              <ButtonCreated>Create</ButtonCreated>
              <Button onClick={closeModal}>Cancel</Button>
            </ModalContent>
          </Modal>
        </Overlay>
      )}
    </Layout>
  );
}