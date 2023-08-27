import React, { useState } from 'react';
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';
import { Threads } from "components/Items";
import Image1 from "assets/png/profile.png";
import Image from 'next/image';


const Threaddetail = [
    {
      yes:88,
      no:12,
      stake:1000,
      contractName: "HelloNear333.testnet",
      title: "This is title",
      description: "this is description descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    }];

 const FlexContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
  `;

const CenteredForm = styled.form`
  margin-top:5%;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackIcon = styled(BiArrowBack)`
  margin-right: 5px;
`;

const Container = styled.div`
  width:600px;
  height:600px;
  border-radius: 14px;
  background: white;
  border: 3px solid;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  --bg-color: #ffff;
  --main-color: #323232;
    box-shadow: 8px 8px var(--main-color);
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 10px;

`;

const Button = styled.button`
  margin-top: 30px;
  margin-right: 600px;
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

const ButtonVote = styled.button`
  margin-bottom:5px;
  width:100%;
  height:40px;
  padding: 10px 20px;
  border: 3px solid;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#6bed86' : '#7efefe')};
  border-radius: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 5px 5px black;
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  .checkmark {
    display: ${props => (props.selected ? 'block' : 'none')};
    margin-left: 5px;
    color: green;
  }
`;

const Title = styled.p`
  font-weight:bold;
  font-size:22px;
  display: flex;
  align-items: center;
  justify-content: center;`;

  const Yes = styled.p`
  font-weight:bold;
  font-size:20px;`;

  const No = styled.p`
  font-weight:bold;
  font-size:20px;
`;

  const Stake = styled.p`
  color: green;
  font-weight:bold;
  font-size:22px;
  margin-left: 0px;
  `;

const Description = styled.p`
  width:100%;
  white-space: normal;
  display: flex;`;  

const StyledImage = styled(Image)`
  border-radius: 50%;
  background: black;
  width:35px;
  height: 35px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  `;
const CreateThread: React.FC = () => {
    const router = useRouter();
  
    const handleBackClick = () => {
      router.push('/thread');
    };
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Selected Option:', selectedOption);
    };
  
    return (
      <div>
        <h1>Create New Thread</h1>
        <CenteredForm onSubmit={handleSubmit}>
          {/* ... */}
          <Button type="button" onClick={handleBackClick}>
            <BackIcon /> Back
          </Button>

          <Container>
            {Threaddetail.map((thread, index) => (
              <div key={index}>
                <Title> {thread.title}</Title>
                <FlexContainer>
                  <StyledImage src={Image1} alt="Profile" width={25} height={25} border-radius={24} />
                  <p>{thread.contractName}</p>
                </FlexContainer>
  
                <Description>{thread.description}</Description>
                <ButtonVote
            type="button"
            selected={selectedOption === 'Choose1'}
            onClick={() => handleOptionClick('Choose1')}
            disabled={selectedOption !== ''}
          >
            Yes<span className="checkmark">✓</span>
          </ButtonVote>
          <br />
          <ButtonVote
            type="button"
            selected={selectedOption === 'Choose2'}
            onClick={() => handleOptionClick('Choose2')}
            disabled={selectedOption !== ''}
          >
            No<span className="checkmark">✓</span>
          </ButtonVote>
              </div>
            ))}
             {Threaddetail.map((thread, index) => (
              <Stake key={index}>{thread.stake} Stack Thread</Stake>
            ))}
          <hr />
          <h4>Result</h4>
          <hr />
          {selectedOption && (
            <>
              {Threaddetail.map((thread, index) => (
                <Yes key={index}>Yes: {thread.yes}%</Yes>
              ))}
              <hr />
              {Threaddetail.map((thread, index) => (
                <No key={index}>No: {thread.no}%</No>
              ))}
            </>
          )}
          </Container>
        </CenteredForm>
      </div>
    );
  };
  
  export default CreateThread;