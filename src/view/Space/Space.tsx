import React,{useEffect,useState} from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";
import { Wallet } from "near/near-wallet";
// @component
import { Spaces } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaPlus } from "react-icons/fa";
import Image1 from "assets/png/img1.webp";
import Image2 from "assets/png/uniswap.webp";
import Image3 from "assets/png/pancakeswap.png";
import Image4 from "assets/png/theopendao.webp";
import Image5 from "assets/png/Edu.png";
import Image6 from "assets/png/op.png";



export default function index() {
  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign

  const [spaces, setSpaces] = useState(null);
  const [walletState, setWalletState] = useState(null);

  
  useEffect(() => {
    const contractId = "dev-1693105604198-31429410070805";
    const wallet = new Wallet({ createAccessKeyFor: contractId  });
    setWalletState(wallet);
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      const spacesData = await wallet.viewMethod({ method: "get_all_spaces",contractId});
      const spaceArr = []
      spacesData.forEach(item => {
        
        spaceArr.push(  {
          id:item.space_id,
          image: Image5,
          title: item.space_name,
          description: "Learn to earn",
          trustpoint: Math.floor(Math.random() * 10000),
          follower: `${Math.floor(Math.random() * 10000)} Followers`,
          connect: [{ icon: FaPlus, link: `/space/${item.space_id}` }],
        },)
      });
      setSpaces(spaceArr)
      console.log(spaceArr);
    };

    startUp()
      .catch(console.error);
  }, [])




  return (
    <Layout id="space">
      <Container>
        <Title>Spaces</Title>

        <MainLayout>
          {spaces  && spaces.map((item, index) => (
            <ItemLayout key={index}>
              <Spaces data={item} wallet={walletState} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}