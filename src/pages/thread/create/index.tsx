import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/router';
import { Wallet } from "../../../near/near-wallet";

const CenteredForm = styled.form`
  margin-top:20%;
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
`;

const Input = styled.input`
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  height: 60px;
  padding: 5px;
  border: 2px solid;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 2px solid;
  border-radius: 8px;
`;

const ContainerWithBorder = styled.div`
  width: 500px;
  border: 3px solid;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;  

const ButtonCreate = styled.button`
  margin-right: 380px;
  padding: 10px 20px;
  border: 3px solid;
  color: black;
  background:none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;



const Button = styled.button`
  margin-right: 405px;
  padding: 10px 20px;
  border: 3px solid;
  color: black;
  background: none;
  border-radius: 13px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
  }
`;

const ButtonVote = styled.button`
  margin-bottom: 5px;
  width: 450px; 
  height: 33px;
  padding: 10px 20px;
  border: 2px solid;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? '#CCC' : 'transparent')};
  border-radius: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; /* Canh giữa nội dung trong nút */
  position: relative;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(243, 243, 243, 1) 0%,
      rgba(159, 232, 241, 1) 12%,
      rgba(0, 186, 207, 1) 42%,
      rgba(46, 117, 126, 1) 83%,
      rgba(6, 23, 27, 1) 100%
    );
    box-shadow: 0 8px 16px rgba(0, 0, 0, 8);
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
        router.push('/thread');
      };

      const [title, setTitle] = useState('');
      const [stake, setStake] = useState('');
      const [ThreadID, setThreadID] = useState('');
      const [description, setDescription] = useState('');
      const [voteType, setVoteType] = useState('Basic');
      const [contractIdFraud, setContractIdFraud] = useState('');
      
      const contractId = "dev-1692873860524-71333580447043";
      const wallet = new Wallet({ createAccessKeyFor: contractId  });
    console.log(router.query);
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
            const voteAction =  await wallet.callMethod({ method: "create_thread",args:{"title": title, "content": description, "media_link":"bafkreifko42xz73mizlglr235icoexdicld5xqutbsymwph4fvnoktvnym", "init_point": parseInt(stake), "space_name": spaceData.space_name, "start_time": Math.floor(+new Date() / 1000).toString() , "end_time":(Math.floor(+new Date() / 1000) + 1 * 24 * 60 * 60).toString(), "options": ["No", "Yes"], "thread_mode": 1},contractId})
            console.log(voteAction);
            router.push(`/thread/${voteAction.thread_id}`);
        }
        if (voteType == "Fraud") {
            //check user Exist before create 
            const voteAction =  await wallet.callMethod({ method: "create_thread",args:{"title": title, "content": description, "media_link":"bafkreifko42xz73mizlglr235icoexdicld5xqutbsymwph4fvnoktvnym", "init_point": stake, "space_name": spaceData.space_name, "start_time": Math.floor(+new Date() / 1000) , "end_time":Math.floor(+new Date() / 1000) + 1 * 24 * 60 * 60, "options": [contractIdFraud, wallet.accountId] , "partner_id":contractIdFraud , "thread_mode": 0},contractId})
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
          <Input placeholder='ThreadID' type="number" id="ThreadID" value={ThreadID} onChange={(e) => setThreadID(e.target.value)} />
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
      <br /><br />
    </div>
  );
};

export default CreateThread;