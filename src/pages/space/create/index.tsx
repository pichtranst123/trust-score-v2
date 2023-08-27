import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';
import { Wallet } from "../../../near/near-wallet";

const CenteredForm = styled.form`
  margin-top:30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackIcon = styled(BiArrowBack)`
  margin-right: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  height:300px;
  box-sizing: border-box;
`;

const Button = styled.button`

  padding: 10px 20px;
  border: 1px solid;
  color: black;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  :hover{
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);

  }
`;

const CreateSpace: React.FC = () => {
  const contractId = "dev-1693129289263-20526325787540";
  const wallet = new Wallet({ createAccessKeyFor: contractId  });

    const router = useRouter();

    const handleBackClick = () => {
        router.push('/Space');
      };
  

  const [spaceName, setSpaceName] = useState('');

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    await wallet.startUp();
    await wallet.callMethod({
      method: "create_space",
      args: {"space_name":spaceName},
      contractId,
    });
    console.log('name:', spaceName);
  };

  return (
    <div>
      <h1>Create New Space</h1>
      <CenteredForm onSubmit={handleSubmit}>
      <InputWrapper>      <Button type="submit" onClick={handleBackClick}>
      <BackIcon />
 Back</Button>
</InputWrapper>


        <InputWrapper>
          <Label htmlFor="title">Name:</Label>
          <Input
            type="text"
            id="Name"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
          />
        </InputWrapper>
        <Button type="submit">Create Space</Button>
      </CenteredForm>
      <br />
      <br />
    </div>
  );
};

export default CreateSpace;
