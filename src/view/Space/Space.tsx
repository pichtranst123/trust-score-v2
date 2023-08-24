import React from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Space.styled";

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