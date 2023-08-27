import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { BiCopy } from "react-icons/bi";
import Image1 from "assets/png/profile.png";
import { Wallet } from "../../near/near-wallet";
import Space1 from "assets/png/educadao.webp";
import Space2 from "assets/png/pancakeswap.png";
import Space3 from "assets/png/uniswap.webp";

import Image from 'next/image';
import { ButtonGroup } from 'Layout/AppLayout/Header/Header.styled';

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


const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Align items side by side with space between */
  padding: 20px; /* Add some padding for spacing */
`;


const CenteredForm3 = styled.form`
  margin-top:200px;

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
  border-radius: 12px;
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


const CenteredForm = styled.form`
  width:600px;
  height:400px;
  flex: 1;
  margin-right: 10px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  border-radius: 12px;
`;

const TrustPoint = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #2e7a7e;
  margin-left: 10px;
`;

const CenteredForm2 = styled.form`
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
  border-radius: 12px;
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
  color: black;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    border: 3px solid;
  }
`;


const SaveButton = styled.button`
  margin-right:220px;
  width: 120px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: 2px solid;
  background: none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    border: 3px solid;
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
  border: 2px solid;
  background: none;
  border-radius: 24px;
  cursor: pointer;
  :hover {
    background: linear-gradient(90deg, rgba(243, 243, 243, 1) 0%, rgba(159, 232, 241, 1) 12%, rgba(0, 186, 207, 1) 42%, rgba(46, 117, 126, 1) 83%, rgba(6, 23, 27, 1) 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);  }
`;

const ButtonGr = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border: none;
  color: black;
  background: none;
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
      const [threadCreated, setThreadCreated] = useState(null);
      const [spaceInfo, setSpaceInfo] = useState(null);
      const [user, setUser] = useState(null);
      const [userName, setUserName] = useState('');
      const router = useRouter();
      const contractId = "dev-1693129289263-20526325787540";
      const wallet = new Wallet({ createAccessKeyFor: contractId });
      
      useEffect(() => {
        const startUp = async () => {
          const isSignedIn = await wallet.startUp();
          if (isSignedIn) {
              const spaces = await wallet.viewMethod({
                method: "get_all_spaces",
                contractId,
              });
              const followSpace = [];
              spaces.forEach(async(item) => {
                
                const userFollow = await wallet.viewMethod({
                  method: "get_followed_user_of_space_by_space_id",
                  args: { space_id: item.space_id },
                  contractId,
                });
                            
                userFollow.forEach(async(userFollowData) => {
                  console.log(wallet.accountId);
                  if(userFollowData == wallet.accountId){    
                    followSpace.push(item.space_id)
                  }
                });
    

              });
              const followSpaceData = [];
              await followSpace.forEach(async(item) => {
                const spaceInfo = await wallet.viewMethod({
                  method: "get_space_metadata_by_space_id",
                  args: { space_id: item },
                  contractId,
                });
                followSpaceData.push(spaceInfo);
              });
              console.log(followSpace);
              console.log(followSpaceData);
              setSpaceInfo(followSpaceData);
            
              const userData = await wallet.viewMethod({
                method: "get_user_metadata_by_user_id",
                args: { user_id: wallet.accountId },
                contractId,
              });
              
              const userThread = await wallet.viewMethod({
                method: "get_all_threads_per_user_own",
                args: { user_id: wallet.accountId },
                contractId,
              });
              setUser(userData)
              setThreadCreated(userThread)
          }
        }
       startUp().catch(console.error);
    },[])
      const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
      };
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('accountID', accountId);
      };
      const handleUpdateProfile = async() => {
        event.preventDefault();
        await wallet.startUp();
        await wallet.callMethod({
          method: "update_user_information",
          args: {"nickname":userName},
          contractId,
        });
        
       

        setIsModalOpen(false);
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
          <TrustPoint>{user && user.total_point} Trust Point</TrustPoint>
          <TrustPoint>Thread Created: {user && user.threads_owned}</TrustPoint>
        </InputWrapper>
        <EditButton type="button" onClick={handleEditProfileClick}>
            Edit profile
          </EditButton>
        <ButtonGr onClick={() => handleTabClick('about')}>About</ButtonGr>
        <ButtonGr onClick={() => handleTabClick('activity')}>Activity</ButtonGr>

      </CenteredForm>
      <FormContainer>

      <CenteredForm2>
      <h4>Following Space</h4>
      <Space>
    {spaceInfo && spaceInfo.map((info, index) => (
      <SpaceItem key={index}>
        <Image src={info.image} alt="Space" width={35} height={34} style={{ marginRight: '10px' }} />
        <SpaceTitle>{info.title}</SpaceTitle>
        <TrustPoint>{info.trustpoint} TRUST</TrustPoint>

      </SpaceItem>
    ))}
  </Space>
      </CenteredForm2> 
       <CenteredForm3>
      <h4>Threads Created </h4>

      <Space>
    {threadCreated && threadCreated.map((info, index) => (
      <SpaceItem key={index}>
        <SpaceTitle>{info.thread_id}</SpaceTitle>
        <SpaceTitle>{info.init_point} Stake TP</SpaceTitle>
        <SpaceTitle>{info.thread_mode ? "Fraud" : "Basic"}</SpaceTitle>

      </SpaceItem>
    ))}
  </Space>        </CenteredForm3>
        </FormContainer>
      </Container>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
          <CloseButton onClick={handleCloseModal}>x</CloseButton>
            <h1>Edit Profile</h1>
            <Input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br/>
            <br />
            <TextArea  placeholder='Description'/>
            <br />
            <SaveButton onClick={() => handleUpdateProfile()}>Save</SaveButton>
            </ModalContent>
        </ModalContainer>
      )}
      <br />
      <br />
    </div>
  );
};

export default CreateThread;