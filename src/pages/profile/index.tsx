import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BiCopy } from "react-icons/bi";
import Image1 from "assets/png/profile.png";
import Space1 from "assets/png/educadao.webp";
import Space2 from "assets/png/pancakeswap.png";
import Space3 from "assets/png/uniswap.webp";

import Image from 'next/image';

const Space = styled.div`
display: flex;
align-items: center;
`;

const SpaceItem = styled.div`
display: flex;
align-items: center;
margin-right: 20px; /* Add some space between items */
`;

const SpaceTitle = styled.p`
font-weight: bold;
margin-left: 10px;
`;

const User = [
  {
    trustpoint: 2250,
    threadCreate: 3
  }];
const Followinfo = [
  {
    image: Image1,
    title: "Space1",
    id: 2,
    trustpoint: 12000,
  },
  {
    image: Image1,
    title: "Space2",
    id: 1,
    trustpoint: 4000,
  }];

const ThreadCreated = [
  {
    image: Image1,
    title: "Thread1",
    type:"Basic Vote",
    id: 3,
    stake: 11000,
  },
  {
    image: Image1,
    title: "Thread2",
    type:"Fraud Vote",

    id: 2,
    stake: 10000,
  }];

const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Align items side by side with space between */
  padding: 20px; /* Add some padding for spacing */
`;


const CenteredForm3 = styled.form`
  border-radius: 24px;
  margin-top:200px;
  background: white;
  flex: 1; /* Take up available space */
  margin-left: 10px; /* Add spacing between the forms */
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  margin-top: 200px;
  height:400px;
  flex-direction: column;
  border: 2px solid;
  --bg-color: #fff;
  --main-color: #323232;
    box-shadow: 8px 8px var(--main-color);
  background: var(--bg-color);
  border: 1px solid var(--main-color);
  border-radius: 10px;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* Add any other styles for spacing, alignment, etc. */
`;

// ModalStyles.js
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #7efefe;
  border: none;
  border-radius: 4px;
  top:0;
  right:2;
  cursor: pointer;
  font-weight: bold;
  margin-left: 400px;
`;


const CenteredForm = styled.form`
  width:400px;
  height:317px;
  background: white;
  flex: 1;
  margin-right: 10px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  border-radius: 25px;
  --bg-color: #fff;
  --main-color: #323232;
    box-shadow: 8px 8px var(--main-color);
  background: var(--bg-color);
  border: 1px solid var(--main-color);
  border-radius: 26px;

`;

const TrustPoint = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #2e7a7e;
  margin-left: 10px;
`;

const CenteredForm2 = styled.form`
  background: white;
  flex: 1; /* Take up available space */
  margin-left: 10px; /* Add spacing between the forms */
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  margin-top: 200px;
  height:400px;
  width:300px;
  flex-direction: column;
  border: 2px solid;
  border-radius: 24px;
  --bg-color: #fff;
  --main-color: #323232;
    box-shadow: 8px 8px var(--main-color);
  background: var(--bg-color);
  border: 1px solid var(--main-color);
  border-radius: 10px;
`;


const CopyIcon = styled(BiCopy)`
  margin-right: 5px;
`;

const InputWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 12px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid;
  border-radius: 5px;
  width: 340px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid;
  border-radius: 5px;
  width: 340px;
  height:100px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 160px;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 8px;
  font-weight:bold
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
  :hover {
    border: 3px solid;
  }
`;


const SaveButton = styled.button`
  margin-left:40px;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
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

const EditButton = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
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

const ButtonGr1 = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-radius: 0px 0px 26px 26px;
  color: black;
  border:none;
  background: #7efefe;
  cursor: pointer;
  :hover {
    background: linear-gradient(90deg, rgba(243, 243, 243, 1) 0%, rgba(159, 232, 241, 1) 12%, rgba(0, 186, 207, 1) 42%, rgba(46, 117, 126, 1) 83%, rgba(6, 23, 27, 1) 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);  }
`;
const ButtonGr = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  color: black;
  border:none;
  background: #7efefe;
  cursor: pointer;
  :hover {
    background: linear-gradient(90deg, rgba(243, 243, 243, 1) 0%, rgba(159, 232, 241, 1) 12%, rgba(0, 186, 207, 1) 42%, rgba(46, 117, 126, 1) 83%, rgba(6, 23, 27, 1) 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);  }
`;

const ImageWrapper = styled.div`
  margin-right:260px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  gap: 10px; /* Add some space between the image and text */

`;


const CreateThread: React.FC = () => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedTab, setSelectedTab] = useState('about'); // Add state to track selected tab
      const router = useRouter();
      const isSignedIn = window?.walletConnection?.isSignedIn();
      const accountId = window.accountId;

      const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
      };
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('accountID', accountId);
      };

      const handleEditProfileClick = () => {
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

  return (
    <div>
    <Container>
      <CenteredForm onSubmit={handleSubmit}>
        <InputWrapper>

        <ImageWrapper>
          <Image src={Image1} alt="Profile" width={35} height={34} border-radius={24} />  
        </ImageWrapper>
          <Button className="copy-button">
          <Label htmlFor="title">

            <div>
              {accountId.substr(0, 9) +
                accountId.substr(accountId.length - 9, accountId.length)}{' '}
                <CopyIcon />
            </div>
            </Label>

          </Button>
          {User.map((user, index) => (
    <div key={index}>
          <TrustPoint>Thread Created: {user.threadCreate}</TrustPoint>

          </div>
            ))}
        </InputWrapper>
        <EditButton type="button" onClick={handleEditProfileClick}>
            Edit profile
          </EditButton>
          <br />
        <ButtonGr onClick={() => handleTabClick('about')}>About</ButtonGr>
        <ButtonGr1 onClick={() => handleTabClick('activity')}>Activity</ButtonGr1>

      </CenteredForm>
      <FormContainer>

      <CenteredForm2>
      <TrustPoint>Following Space</TrustPoint>
      <Space>
    {Followinfo.map((info, index) => (
      <SpaceItem key={index}>
        <SpaceTitle>{info.title}</SpaceTitle>
        <TrustPoint>{info.trustpoint} TRUST</TrustPoint>

      </SpaceItem>
    ))}
  </Space>
      </CenteredForm2>
       <CenteredForm3>
      <TrustPoint>Threads Created </TrustPoint>

      <Space>
    {ThreadCreated.map((info, index) => (
      <SpaceItem key={index}>
        <SpaceTitle>{info.title}</SpaceTitle>
        <TrustPoint>{info.stake}Stake</TrustPoint>
        <SpaceTitle>{info.type}</SpaceTitle>

      </SpaceItem>
    ))}
  </Space>        </CenteredForm3>
        </FormContainer>
      </Container>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
          <CloseButton onClick={handleCloseModal}>x</CloseButton>
            <h1>EDIT PROFILE</h1>

            <Input type="text" placeholder='Name' />
            <br/>
            <br />
            <TextArea  placeholder='Description'/>
            <br />
            <SaveButton>Save</SaveButton>
            </ModalContent>
        </ModalContainer>
      )}
      <br />
      <br /><br />
      <br /><br />
      <br />
      
    </div>
  );
};

export default CreateThread;
