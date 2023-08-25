import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BiCopy } from "react-icons/Bi";
import {useEffect} from 'react';
import Image1 from "assets/png/profile.png";
import Space1 from "assets/png/educadao.webp";
import Space2 from "assets/png/pancakeswap.png";
import Space3 from "assets/png/uniswap.webp";

import Image from 'next/image';


const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Align items side by side with space between */
  padding: 20px; /* Add some padding for spacing */
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
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  top:0;
  right:2;
  cursor: pointer;
  font-weight: bold;
  margin-left: 400px;

  &:hover {
    background-color: #ccc;
  }
`;

const SpaceImage = styled(Image)`
  margin-right: 10px; /* Add some spacing between images */
`;

const CenteredForm = styled.form`
  flex: 1;
  margin-right: 10px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 12px;
`;

const CenteredForm2 = styled.form`
  flex: 1; /* Take up available space */
  margin-left: 10px; /* Add spacing between the forms */
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  margin-top: 200px;
  height:150px;
  flex-direction: column;
  border: 2px solid #ccc;
  border-radius: 12px;
`;



const H1 = styled.form`
  margin-right: 300px;
`;
const Editprofile = styled.form`
  justify-content: center;
`;
const StyledImage = styled(Image)`
  border-radius: 50%;
  width:35px;
  height: 35px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
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
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 340px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 340px;
  height:100px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    border: 3px solid #ccc;
  }
`;


const SaveButton = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    border: 3px solid #ccc;
  }
`;

const EditButton = styled.button`
  width: 200px;
  height: 40px;
  margin-left: 30px;
  margin-right: 30px;

  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    border: 3px solid #ccc;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

`;


const CreateThread: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const isSignedIn = window?.walletConnection?.isSignedIn();
  const accountId = window.accountId;
  const [description, setDescription] = useState('');


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('accountID', accountId);
    console.log('space:', description);
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
            <Label htmlFor="title">
              <div>
                {accountId.substr(0, 8) +
                  accountId.substr(accountId.length - 9, accountId.length)}
              </div>
            </Label>
          <Button className="copy-button">
            <div>
              {accountId.substr(0, 5) +
                '...' +
                accountId.substr(accountId.length - 4, accountId.length)}{' '}
                <CopyIcon />
            </div>
          </Button>
        </InputWrapper>
        <EditButton type="button" onClick={handleEditProfileClick}>
          Edit profile
        </EditButton>
      </CenteredForm>
      <CenteredForm2>
      <h4>Following Space</h4>
      <SpaceImage src={Space1} alt="Space 1" width={50} height={100} /><SpaceImage src={Space2} alt="Space 2" width={50} height={100} /><SpaceImage src={Space3} alt="Space 3" width={50} height={100} />

      </CenteredForm2>
      </Container>



      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
          <CloseButton onClick={handleCloseModal}>x</CloseButton>
            <h1>Edit Profile</h1>

            <H1>Name</H1>
            <Input type="text" />
            <br/>
            <H1>Bio</H1>
            <TextArea/>
            <br />
            <SaveButton>Save</SaveButton>
            </ModalContent>
        </ModalContainer>
      )}
      <br />
      <br />
    </div>
  );
};

export default CreateThread;
