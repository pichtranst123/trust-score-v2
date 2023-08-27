import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import { Threads } from "components/Items";
import Image1 from "assets/png/profile.png";
import Image from "next/image";
import { Wallet } from "../../near/near-wallet";
import { test } from "node:test";


const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CenteredForm = styled.form`
  margin-top: 5%;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackIcon = styled(BiArrowBack)`
  margin-right: 5px;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
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

const ButtonVote = styled.button<{selected: boolean}>`
margin-bottom:5px;
width:100%;
height:40px;
padding: 10px 20px;
border: 3px solid;
color: ${(props) => (props.selected ? "white" : "black")};
background-color: ${(props) => (props.selected ? "#6bed86" : "#7efefe")};
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
  display: ${(props) => (props.selected ? "block" : "none")};
  margin-left: 5px;
  color: green;
}
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Yes = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const No = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Stake = styled.p`
  color: green;
  font-weight: bold;
  font-size: 22px;
  margin-left: 0px;
`;

const Description = styled.p`
  width: 100%;
  white-space: normal;
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;
const CreateThread: React.FC = () => {
  const [threadDetail, setThreadDetail] = useState([]);
  const [choice, setChoice] = useState([]);
  const [choicesRate, setChoicesRate] = useState([]);
  const [spaceId, setSpaceId] = useState([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();
  const {
    query: { thread_id },
  } = router;

  const contractId: any = process.env.NEXT_PUBLIC_CONTRACT_NAME;
  const wallet = new Wallet({ createAccessKeyFor: contractId as any });

  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      if (isSignedIn) {
        const threadDetailData = await wallet.viewMethod({
          method: "get_thread_metadata_by_thread_id",
          args: { thread_id: thread_id },
          contractId,
        });
        console.log(threadDetailData);
        setSpaceId(threadDetailData.space_id);
        const ThreadArr: any = [
          {
            thread_id: threadDetailData.thread_id,
            title: threadDetailData.title,
            description: threadDetailData.content,
          },
        ];
        setThreadDetail(ThreadArr);
        if (threadDetailData.user_votes_map[wallet.accountId]) {
          threadDetailData.user_votes_map[wallet.accountId].forEach(
            (item:any, index:any) => {
              if (item > 0) {
                setSelectedOption(index);
              }
            }
          );
        }
        const trustPointPercent: any = [];
        Object.keys(threadDetailData.user_votes_map).forEach((key, index) => {
          trustPointPercent.push({
            [index]: threadDetailData.user_votes_map[key],
          });
        });
        console.log(trustPointPercent);
        const choices_map: any = [];
        Object.keys(threadDetailData.choices_map).forEach((key, index) => {
          choices_map.push({ [key]: threadDetailData.choices_map[key] });
        });
        setChoice(choices_map);

        if (threadDetailData.choices_rating) {
          const voteData: any = [];
          Object.keys(threadDetailData.choices_map).forEach((key, index) => {
            const a = threadDetailData.choices_map[key];
            voteData.push({ [a]: threadDetailData.choices_rating[index] });
          });
          console.log(voteData);
          setChoicesRate(voteData);
        }
      }
    };

    startUp().catch(console.error);
  }, []);

  const handleBackClick = () => {
    router.push(`/space/${spaceId}`);
  };

  const handleOptionClick = async (option: number) => {
    await wallet.startUp();
    console.log(option);
    const voteAction = await wallet.callMethod({
      method: "vote_thread",
      args: { thread_id: thread_id, choice_number: option, point: 50 },
      contractId,
    });
    if (voteAction == "OK") {
      const threadDetailData = await wallet.viewMethod({
        method: "get_thread_metadata_by_thread_id",
        args: { thread_id: thread_id },
        contractId,
      });
      console.log(threadDetailData);

      const ThreadArr = [
        {
          thread_id: threadDetailData.thread_id,
          title: threadDetailData.title,
          description: threadDetailData.content,
        },
      ];
      setThreadDetail(ThreadArr as any);
      if (threadDetailData.user_votes_map[wallet.accountId]) {
        threadDetailData.user_votes_map[wallet.accountId].forEach(
          (item:any, index:any) => {
            if (item > 0) {
              setSelectedOption(index);
            }
          }
        );
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
          {threadDetail &&
            threadDetail.map((thread:any, index:any) => (
              <div key={index}>
                <Title> {thread.title}</Title>
                <FlexContainer>
                  <StyledImage
                    src={Image1}
                    alt="Profile"
                    width={25}
                    height={25}
                    border-radius={24}
                  />
                  <p>{thread.thread_id}</p>
                </FlexContainer>

                <Description>{thread.content}</Description>
              </div>
            ))}
          {choice &&
            choice.map((item:any, index:any) => (
              <>
                <ButtonVote
                  type="button"
                  selected={selectedOption === index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== ""}
                >
                  {item[index]}
                  <span className="checkmark">✓</span>
                </ButtonVote>
              </>
            ))}

          {threadDetail &&
            threadDetail.map((thread:any, index:any) => (
              <Stake key={index}>{thread.stake} Stack Thread</Stake>
            ))}

          <hr />
          <h4>Result</h4>
          <hr />
          {selectedOption && (
            <>
              {threadDetail &&
                threadDetail.map((thread:any, index:any) => (
                  <Stake key={index}>{thread.stake} Stack Thread</Stake>
                ))}
              <hr />
              <h4>Result</h4>
              <hr />
              {choicesRate &&
                choicesRate.map((item:any, index:any) => (
                  <>
                    <Yes key={index}>
                      {Object.keys(item)} : {Object.values(item)} TP
                    </Yes>
                    <hr />
                  </>
                ))}
            </>
          )}
        </Container>
      </CenteredForm>
    </div>
  );
};

export default CreateThread;
