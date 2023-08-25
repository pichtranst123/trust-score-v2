import React, { useState } from 'react';
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';
import { Threads } from "components/Items";
import Image1 from "assets/png/profile.png";
import Image from 'next/image';


const Threaddetail = [
    {
      contractName: "HelloNear333.testnet",
      title: "This is title",
      description: "this is description",
    }];


 const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

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

const Button = styled.button`
  margin-right: 240px;
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

const ButtonVote = styled.button`

  width:300px;
  height:40px;
  padding: 10px 20px;
  border: 1px solid;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#CCC' : 'transparent')};
  border: none;
  border-radius: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative; /* Để làm cho dấu tích đứng trên nút */
  :hover {
    background: linear-gradient(90deg, rgba(243, 243, 243, 1) 0%, rgba(159, 232, 241, 1) 12%, rgba(0, 186, 207, 1) 42%, rgba(46, 117, 126, 1) 83%, rgba(6, 23, 27, 1) 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }

  

  .checkmark {
    display: ${props => (props.selected ? 'block' : 'none')};
    margin-left: 5px;
    color: green;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
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
            {Threaddetail.map((thread, index) => (
              <div key={index}>
                <h1> {thread.title}</h1>
                <FlexContainer>
                <StyledImage src={Image1} alt="Profile" width={25} height={25} border-radius={24} />
                <p>{thread.contractName}</p>
                </FlexContainer>

                <p>{thread.description}</p>
              </div>
            ))}
            <ButtonVote
              type="button"
              selected={selectedOption === 'Choose1'}
              onClick={() => handleOptionClick('Choose1')}
            >
              Yes<span className="checkmark">✓</span>
            </ButtonVote>
            <br />
            <ButtonVote
              type="button"
              selected={selectedOption === 'Choose2'}
              onClick={() => handleOptionClick('Choose2')}
            >
              No<span className="checkmark">✓</span>
            </ButtonVote>
            <br /><br />
            <ButtonVote type="submit" disabled={!selectedOption}>Vote</ButtonVote>
            <br /><br />
          </CenteredForm>
        </div>
      );
  };
  
  export default CreateThread;