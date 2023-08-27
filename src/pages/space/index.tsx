// pages/User.tsx
import styled from "styled-components";

// -----------------------------------------------------------

const Button = styled.button`
margin-bottom:20px;
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

export const Layout = styled.div`
  margin-top:20%;
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
  border: 3px solid;
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


import React from "react";

// @styled-component

// @component
import { Threads } from "components/Items";
import Container from "components/Container/Container";

// @assets
import Image1 from "assets/png/profile.webp";

const Spaceinfo = [
  {
    image: Image1,
    endTime: "1 weeks",
    contractName: "HelloNear333.testnet",
    title:
      "Magic Square Community Validation: Temple Wallet on the Magic Store Voting",
    description:
      "Welcome to the Magic Square Community Validation for Project Temple Wallet on the Magic Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Temple Wallet meets the necessary criteria to be validated on the Magic Store, Web3 App Store.Temple is a non-custodial blockchain wallet that allows users to store, send, buy, stake, and sell their Tezos-built tokens and interact with dApps on the Tezos blockchain. Temple has a web extension version as well as Android and iOs apps. Temple has in-built top-up and stake features and is supported by the Tezos Foundation.",
    trustpoint: 2000,
  },
  {
    image: Image1,
    endTime: "4 weeks",
    contractName: "TroxSS.testnet",
    title:
      "Magic Square Community Validation: League of Kingdoms on the Magic Store Voting",
    description:
      "Temple is a non-custodial blockchain wallet that allows users to store, send, buy, stake, and sell their Tezos-built tokens and interact with dApps on the Tezos blockchain. Temple has a web extension version as well as Android and iOs apps. Temple has in-built top-up and stake features and is supported by the Tezos Foundation.",
    trustpoint: 1000,
  },
  {
    image: Image1,
    endTime: "4 weeks",
    contractName: "Jayces.testnet",
    title: "Uni Swap",
    description:
      "For further discussion on Project Temple Wallet validation, join our Discord Server to connect with fellow community members.",
    trustpoint: 3000,
  },
  {
    image: Image1,
    endTime: "2 weeks",
    contractName: "pichtran.testnet",
    title:
      "Magic Square Community Validation: Babbu City on the Magic Store Voting",
    description:
      "Welcome to the Magic Square Community Validation for Project Temple Wallet on the Magic Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Temple Wallet meets the necessary criteria to be validated on the Magic Store, Web3 App Store.Temple is a non-custodial blockchain wallet that allows users to store, send, buy, stake, and sell their Tezos-built tokens and interact with dApps on the Tezos blockchain. Temple has a web extension version as well as Android and iOs apps. Temple has in-built top-up and stake features and is supported by the Tezos Foundation.",
    trustpoint: 5000,
  },
];
// ----------------------------------------------------------

Spaceinfo.sort((a, b) => b.trustpoint - a.trustpoint);
import { useRouter } from "next/router";

// ...
const ThreadPage: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/thread/create");
  };

  return (
    <div>
      <Layout id="space">
        <Container>
          <Title>Threads</Title>
          <br />
          <br />
          <br />
          <br />
          <Button type="submit" onClick={handleBackClick}>
            Create thread
          </Button>
          <MainLayout>
            {Spaceinfo.map((item:any) => (
              <Threads data={item} />
            ))}
          </MainLayout>
        </Container>
      </Layout>
    </div>
  );
};

export default ThreadPage;
