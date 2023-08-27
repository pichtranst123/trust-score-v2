import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';
import { Wallet } from "../../../near/near-wallet";

const CenteredForm = styled.form`
  margin-top:5%;
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

const Input = styled.input`
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
  background: #ffff;

`;

const TextArea = styled.textarea`
  height: 60px;
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
  background: #fff;

`;

const Select = styled.select`
  padding: 5px;
  border: 2px solid;
  border-radius: 8px;
  background: #ffff;
`;

const ContainerWithBorder = styled.div`
  width: 500px;
  border: 3px solid;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  --bg-color: #7efefe;
  --main-color: #323232;
    box-shadow: 4px 4px var(--main-color);
  background: var(--bg-color);
  border: 2px solid var(--main-color);
`;  

const ButtonCreate = styled.button`
  margin-right: 340px;
  padding: 10px 20px;
  border: 3px solid;
  color: black;
  border-radius: 13px;
  cursor: pointer;
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
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

const Button = styled.button`
  margin-right: 405px;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 24px;
  border: 2px solid;
  background: #7efefe;
  box-shadow: 5px 5px black;
  cursor: pointer;
  margin-top: 55px;

&:active {
  box-shadow: none;
  transform: translate(3px, 3px);
  }
`;

const ButtonVote = styled.button`
  margin-bottom: 5px;
  width: 450px; 
  height: 33px;
  padding: 10px 20px;
  border: 2px solid;
  color: ${props => (props.selected ? 'black' : 'black')};
  background-color: ${props => (props.selected ? 'Green' : '#ffff')};
  border-radius: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
    }
  .checkmark {
    display: ${props => (props.selected ? 'block' : 'none')};
    margin-left: 5px;
    color: green;
  }
}`;

const Option = styled.option` 
`;

      const CreateThread: React.FC = () => {
      const router = useRouter();
      const [selectedOption, setSelectedOption] = useState<boolean | undefined>(undefined);

      const handleVoteClick = (option: boolean) => {
        setSelectedOption(option);
      };

    

      const handleBackClick = () => {
        router.push(`/space/${router.query.space_id}`);
      };

      const [title, setTitle] = useState('');
      const [stake, setStake] = useState('');
      const [description, setDescription] = useState('');
      const [voteType, setVoteType] = useState('Basic');
      const [contractIdFraud, setContractIdFraud] = useState('');
      
      const contractId = "dev-1693105604198-31429410070805";
      const wallet = new Wallet({ createAccessKeyFor: contractId  });

      useEffect(() => {
        const startUp = async () => {
          const isSignedIn = await wallet.startUp();
        };
      
        startUp()
          .catch(console.error);
      }, [])

      const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();

        await wallet.startUp();
        const spaceData = await wallet.viewMethod({ method: "get_space_metadata_by_space_id",args:{"space_id": router.query.space_id},contractId});
        console.log(spaceData);

        if (voteType == "Basic") {
            const voteAction =  await wallet.callMethod({ method: "create_thread",args:{"title": title, "content": description, "media_link":"bafkreifko42xz73mizlglr235icoexdicld5xqutbsymwph4fvnoktvnym", "init_point": parseInt(stake), "space_name": spaceData.space_name, "start_time": Date.now().toString(), "end_time":(Date.now() + 60*60*1000).toString(), "options": ["No", "Yes"], "thread_mode": 1},contractId})
            console.log(voteAction);
            router.push(`/thread/${voteAction.thread_id}`);
        }
        if (voteType == "Fraud") {
            console.log("acheck");
            const userData = await wallet.viewMethod({ method: "get_user_metadata_by_user_id",args:{"user_id": contractIdFraud},contractId});
            console.log(userData);
            if(userData){
                const voteAction =  await wallet.callMethod({ method: "create_thread",args:{"title": title, "content": description, "media_link":"bafkreifko42xz73mizlglr235icoexdicld5xqutbsymwph4fvnoktvnym", "init_point": parseInt(stake), "space_name": spaceData.space_name, "start_time": Date.now().toString() , "end_time":(Date.now() + 60*60*1000).toString(), "options": [contractIdFraud, wallet.accountId] , "partner_id":contractIdFraud , "thread_mode": 0},contractId})
                console.log(voteAction);
                router.push(`/thread/${voteAction.thread_id}`);
            }
            //check user Exist before create 
           
        }   
      };

  return (
    <div>
      <h1>Create New Thread</h1>
      <CenteredForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Button type="submit" onClick={handleBackClick}>
            <BackIcon />
            Back
          </Button>
        </InputWrapper>
<ContainerWithBorder>
        <InputWrapper>
          <Input placeholder='Title' type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder='Stake' type="number" id="Stake" value={stake} onChange={(e) => setStake(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <TextArea placeholder='Description' id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <Select placeholder='Vote'
            id="choice"
            value={voteType}
            onChange={(e) => setVoteType(e.target.value)}
          >
            <Option value="Basic">Basic vote</Option>
            <Option value="Fraud">Fraud</Option>
          </Select>
        </InputWrapper>

        {voteType === 'Basic' && (
          <>
            <ButtonVote
              type="button"
            >
              Yes<span className="checkmark">✓</span>
            </ButtonVote>
            <ButtonVote
              type="button"
            >
              No<span className="checkmark">✓</span>
            </ButtonVote>
          </>
        )}
        {voteType === 'Fraud' && (
          <>
            <InputWrapper>
              <Input placeholder='Contact Name' type="text" value={contractIdFraud} onChange={(e) => setContractIdFraud(e.target.value)} id="name_user_B" />
            </InputWrapper>

          </>
        )}
        </ContainerWithBorder>
        <br />
        <ButtonCreate type="submit">Create Thread</ButtonCreate>
      </CenteredForm>
      <br /><br /> <br /><br />
    </div>
  );
};

export default CreateThread;