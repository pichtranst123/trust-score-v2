import {React,useEffect,useState} from "react";

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



const Spaceinfo = [
  {
    image: Image1,
    title: "DAO",
    description: "DAO Arbitrum",
    trustpoint: 20000,
    follower: "100,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image3,
    title: "Pancake Swap",
    description: "Pancake Swap Community",
    trustpoint: 10000,
    follower: "10,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image2,
    title: "Uni Swap",
    description: "Uni Swap Community",
    trustpoint: 8000,

    follower: "70,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image6,
    title: "Optimism",
    description: "Layer2",
    trustpoint: 18000,

    follower: "20,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread"}],
  },
  {
    image: Image4,
    title: "OpenSea",
    description: "OpenSea marketplace",
    trustpoint: 5000,

    follower: "50,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
  {
    image: Image5,
    title: "EDU",
    description: "Learn to earn",
    trustpoint: 2000,

    follower: "33,000 Followers",
    connect: [{ icon: FaPlus, link: "/thread" }],
  },
];
// ----------------------------------------------------------

Spaceinfo.sort((a, b) => b.trustpoint - a.trustpoint);

export default function index() {
  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign
  const [valueFromBlockchain, setValueFromBlockchain] = useState();
  const CONTRACT_ADDRESS = "dev-1692890433237-45573031471653";
  const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });
  useEffect(() => {
    const startUp = async () => {
      const isSignedIn = await wallet.startUp();
      const a = await getSpaces();
      console.log(a);
    };

    startUp()
      .catch(console.error);
  }, [])


  async function getSpaces() {
    // use the wallet to query the contract's greeting
    console.log(wallet.accountId);
    return wallet.viewMethod({ method: "get_all_spaces", args: { account_id: wallet.accountId } ,CONTRACT_ADDRESS });
  }


  return (
    <Layout id="space">
      <Container>
        <Title>Spaces</Title>

        <MainLayout>
          {Spaceinfo.map((item, index) => (
            <ItemLayout key={index}>
              <Spaces data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}