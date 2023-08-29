import React, { useEffect, useState } from "react";
import styled from "styled-components";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";
import { Wallet } from "near/near-wallet";
// @component
import { Spaces } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaPlus } from "react-icons/fa";
import Image5 from "assets/png/img5.png";
import { create } from "domain";



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  
  height:60px;
  margin-left: 40px;
  padding: 27px;
  border-radius: 24px;
  height: 40px;
  border: 2px solid;
  font-size: 16px;
  background: #7efefe;
  outline: none;
  box-shadow: 7px 7px 0px 0px black;
  transition: all 0.5s;
  &::placeholder {
    color: black;
  }
  &:focus {
    box-shadow: none;
    transition: all 0.5s;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Loadmore = styled.button`
  display: block;
  margin: 0 auto;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left:20px;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  border: 2px solid;
  background: #7efefe;
  box-shadow: 5px 5px black;
  cursor: pointer;
  margin: 35px 10px;
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
`;

const NameSpace = styled.input`
  width: 100%;
  background: white;
  padding: 8px;
  border: 2px solid;
  border-radius: 4px;
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
    margin-left:20px;
    font-size: 14px;
    color: black;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 24px;
    border: 2px solid;
    background: #7efefe;
    box-shadow: 5px 5px black;
    cursor: pointer;
    margin: 35px 10px;

    &:active {
      box-shadow: none;
      transform: translate(3px, 3px);
    `;
const ButtonCreate = styled.button`

      height:60px;
      font-size: 14px;
      color: black;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 24px;
      border: 2px solid;
      background: #7efefe;
      box-shadow: 5px 5px black;
      cursor: pointer;

      &:active {
        box-shadow: none;
        transform: translate(3px, 3px);
      `;

const ButtonCreated = styled.button`
    margin-right:20px;
    font-size: 14px;
    color: black;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 24px;
    border: 2px solid;
    background: #7efefe;
    box-shadow: 5px 5px black;
    cursor: pointer;
    margin: 35px 0;

    &:active {
      box-shadow: none;
      transform: translate(3px, 3px);
    `;


    interface Space {
      space_id: string;
      space_name: string;
    }
    export default function Index() {
      const PAGE_SIZE = 8;
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [spaceName, setSpaceName] = useState("");
      const contractId: any = process.env.NEXT_PUBLIC_CONTRACT_NAME;
      const [displayedSpaceCount, setDisplayedSpaceCount] = useState(PAGE_SIZE);
      const wallet = new Wallet({ createAccessKeyFor: contractId as any });
    
      const [spaces, setSpaces] = useState<Space[]>([]); // Specify the type here
      const [walletState, setWalletState] = useState(null);
    
      useEffect(() => {
        const contractId: any = process.env.NEXT_PUBLIC_CONTRACT_NAME;
        const wallet = new Wallet({ createAccessKeyFor: contractId });
        setWalletState(wallet as any);
    
        const startUp = async () => {
          const isSignedIn = await wallet.startUp();
          const spacesData = await wallet.viewMethod({
            method: "get_all_spaces",
            contractId,
          });
          const spaceArr: any = [];
          spacesData.forEach((item: any) => {
            spaceArr.push({
              ...item,
              image: Image5,
              connect: [{ icon: FaPlus, link: `/space/${item.space_id}` }],
            });
          });
          setSpaces(spaceArr);
        };
    
        startUp().catch(console.error);
      }, []);
    
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const loadMoreSpaces = () => {
        setDisplayedSpaceCount(prevCount => prevCount + PAGE_SIZE);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const createSpace = async () => {
        await wallet.startUp();
        await wallet.callMethod({
          method: "create_space",
          args: { space_name: spaceName },
          contractId,
        });
        const spacesData = await wallet.viewMethod({
          method: "get_all_spaces",
          contractId,
        });
        const spaceArr: any = [];
        spacesData.forEach((item: any) => {
          spaceArr.push({
            ...item,
            image: Image5,
            connect: [{ icon: FaPlus, link: `/space/${item.space_id}` }],
          });
        });
        setSpaces(spaceArr);
        setIsModalOpen(false);
      };
    
      const searchSpaces = (query:any) => {
        const filteredSpaces = spaces.filter(space =>
          space.space_name.toLowerCase().includes(query.toLowerCase())
        );
        
        setSpaces(filteredSpaces);
      };
    
      const hasMoreSpaces = spaces.length > displayedSpaceCount;
    
      return (
        <Layout id="space">
          <Container>
            <Title>Spaces</Title>
            <RowWrapper>
              <ButtonCreate onClick={openModal}>Create Space</ButtonCreate>
              <InputContainer>
                <Input
                  placeholder="SEARCH SPACE..."
                  type="text"
                  name="text"
                  onChange={(e) => searchSpaces(e.target.value)}
                />
              </InputContainer>
            </RowWrapper>
            <br /><br />
            <MainLayout>
              {spaces.slice(0, displayedSpaceCount).map((item: any, index: any) => (
                <ItemLayout key={index}>
                  <Spaces data={item} wallet={walletState} />
                </ItemLayout>
              ))}
            </MainLayout>
            <ButtonContainer>
              {hasMoreSpaces && (
                <Loadmore onClick={loadMoreSpaces}>Load more</Loadmore>
              )}
            </ButtonContainer>
          </Container>
          {isModalOpen && (
            <Overlay id="modalOverlay">
              <Modal>
                <ModalContent>
                  <NameSpace
                    type="text"
                    placeholder="Name"
                    value={spaceName}
                    onChange={(e) => setSpaceName(e.target.value)}
                  />
                  <ButtonCreated onClick={createSpace}>Create</ButtonCreated>
                  <Button onClick={closeModal}>Cancel</Button>
                </ModalContent>
              </Modal>
            </Overlay>
          )}
        </Layout>
      );
    }
    