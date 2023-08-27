import React,{useEffect,useState} from "react";
import styled from "styled-components";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";
import { Wallet } from "near/near-wallet";
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
      background: white;
      padding: 8px;
      border: 2px solid;
      border-radius: 4px;
      margin-bottom: 10px;
    `;

    const IdSpace = styled.input`
      width: 100%;
      padding: 8px;
      background: white;
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
      margin: 35px 0;

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


export default function index() {
  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [spaces, setSpaces] = useState(null);
  const [walletState, setWalletState] = useState(null);

  
  useEffect(() => {
    const contractId = "dev-1693105604198-31429410070805";
    const wallet = new Wallet({ createAccessKeyFor: contractId  });
    setWalletState(wallet);
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      const spacesData = await wallet.viewMethod({ method: "get_all_spaces",contractId});
      const spaceArr = []
      spacesData.forEach(item => {
        
        spaceArr.push(  {
          id:item.space_id,
          image: Image5,
          title: item.space_name,
          description: "Learn to earn",
          trustpoint: Math.floor(Math.random() * 10000),
          follower: `${Math.floor(Math.random() * 10000)} Followers`,
          connect: [{ icon: FaPlus, link: `/space/${item.space_id}` }],
        },)
      });
      setSpaces(spaceArr)
      console.log(spaceArr);
    };

    startUp()
      .catch(console.error);
  }, [])




  return (
    <Layout id="space">
      <Container>
        <Title>Spaces</Title>
        <ButtonCreate onClick={openModal}>Create Space</ButtonCreate>
        <br />
        <br /><br />
        <MainLayout>
          {spaces  && spaces.map((item, index) => (
            <ItemLayout key={index}>
              <Spaces data={item} wallet={walletState} />
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
              <ButtonCreated>Create</ButtonCreated>
              <Button onClick={closeModal}>Cancel</Button>
            </ModalContent>
          </Modal>
        </Overlay>
      )}
    </Layout>
  );
}