import {useEffect,useState} from "react";
import { Wallet } from "../../near/near-wallet";
import { useRouter } from 'next/router';
import styled from 'styled-components';
// -----------------------------------------------------------

// @component
import { Threads } from "components/Items";
import Container from "components/Container/Container";

// @assets
import Image1 from "assets/png/profile.webp";


const Button = styled.button`
  margin-bottom:30px;
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

export const Layout = styled.div`
  margin-top:15%;
  width: 50vw;

  padding: 0px 0px 50px 0px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding: 0px 0px 50px 0px;
  }

  @media screen and (max-width: 575px) {
    padding: 150px 0px 50px 0px;
  }
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  width: 100%;
  max-width: 100%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemLayout = styled.div`

  display: flex;
  justify-content: flex-end;
  `;

export const Title = styled.div`
  text-align: center;
  justify-content: center;

  font-size: 56px;
  font-weight: 800;
  color: black;

  margin-bottom: 50px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;


// ...
const ThreadPage: React.FC = () => {
  const router = useRouter();
  const {
    query: { space_id },
  } = router
  const [threads, setThreads] = useState(null);
  const contractId = "dev-1693051165842-29900861144051";
  const wallet = new Wallet({ createAccessKeyFor: contractId  });
  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
        const threadsData = await wallet.viewMethod({ method: "get_all_threads_of_space_by_space_id",args:{"space_id": space_id},contractId});
        const threadArr = []
        threadsData.forEach(async(item) => {
          const threadDetail = await wallet.viewMethod({ method: "get_thread_metadata_by_thread_id",args:{"thread_id": item},contractId});
          console.log(threadDetail);
          threadArr.push({
            image: Image1,
            endTime:"1 weeks",
            contractName: threadDetail.creator_id,
            title:threadDetail.title,
            description: threadDetail.title.content,
            trustpoint: threadDetail.init_point,
          })
        });
        setThreads(threadArr);
      
  
     
    };
  
    startUp()
      .catch(console.error);
  }, [])
  const handleBackClick = () => {
    router.push(`/thread/create?space_id=${space_id}`);
  };

  return (
    <div>
      <Layout id="space">
        <Container>
          <Title>Threads</Title>
          <br /><br />
          <br /><br />
          <Button type="submit" onClick={handleBackClick}>Create thread</Button>
          <MainLayout>
            {threads && threads.map((item) => (
                <Threads data={item} />
            ))}
          </MainLayout>
        </Container>
      </Layout>
    </div>
  );
};  

export default ThreadPage;