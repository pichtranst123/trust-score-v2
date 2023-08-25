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

    const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between; /* Adjust the spacing between containers */
  `;

 const FlexContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
  `;

const CenteredForm = styled.form`
  margin-top:10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackIcon = styled(BiArrowBack)`
  margin-right: 5px;
`;

const Container = styled.div`
  width:800px;
  height:500px;
  border-radius: 14px;
  border: 3px solid;
  padding: 20px;
  margin: 20px;
  overflow: hidden; /* Clip any overflow */

`;

const Button = styled.button`
  margin-right: 980px;
  padding: 10px 20px;
  color: black;
  background: none;
  border-radius: 13px;
  cursor: pointer;
  :hover{
    background: linear-gradient(90deg, rgba(243,243,243,1) 0%, rgba(159,232,241,1) 12%, rgba(0,186,207,1) 42%, rgba(46,117,126,1) 83%, rgba(6,23,27,1) 100%);    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;

const Container2 = styled.div`
  width: 50%; /* Set the width to 50% of the parent container */
  height: 300px;
  border-radius: 14px;
  border: 3px solid;
  padding: 20px;
  margin: 20px;
  overflow: hidden; /* Clip any overflow */
`;

  const ButtonVote2 = styled.button`
  margin-bottom:5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:40px;
  padding: 10px 20px;
  border: 3px solid;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#45ab00' : 'transparent')};
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

const ButtonVote = styled.button`
  margin-bottom:5px;
  width:100%;
  height:40px;
  padding: 10px 20px;
  border: 3px solid;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#6bed86' : 'transparent')};
  border-radius: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
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
          <FlexWrapper>

          <Container>
            {Threaddetail.map((thread, index) => (
              <div key={index}>
                <Title> {thread.title}</Title>
                <FlexContainer>
                  <StyledImage src={Image1} alt="Profile" width={25} height={25} border-radius={24} />
                  <p>{thread.contractName}</p>
                </FlexContainer>
  
                <Description>{thread.description}</Description>
                <br /> <br /> <br /> <br /> <br /> <br /> <br />

                <ButtonVote
                  type="button"
                  selected={selectedOption === 'Choose1'}
                  onClick={() => handleOptionClick('Choose1')}
                >
                  Yes<span className="checkmark">✓</span>
                </ButtonVote>
                <ButtonVote
                  type="button"
                  selected={selectedOption === 'Choose2'}
                  onClick={() => handleOptionClick('Choose2')}
                >
                  No<span className="checkmark">✓</span>
                </ButtonVote>
              </div>
            ))}
              <ButtonVote2 type="submit" disabled={!selectedOption}>Vote</ButtonVote2>
          </Container>
          <Container2>
          {Threaddetail.map((thread, index) => (
              <Stake key={index}>{thread.stake} Stack Thread</Stake>
            ))}
          <hr />
          <h4>Result</h4>
          <hr />
          {Threaddetail.map((thread, index) => (
          <Yes key={index}>Yes:{thread.yes}%</Yes>))}
          <hr />
          {Threaddetail.map((thread, index) => (
          <No key={index}>No:{thread.no}%</No>))}
          
        </Container2>
        </FlexWrapper>
        </CenteredForm>
      </div>
    );
  };
  
  export default CreateThread;