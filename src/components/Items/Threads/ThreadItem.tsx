import React from "react";
import Image from "next/image";
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Button = styled.button`
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: black;
  border: 2px solid;
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    transform: scale(0);
    z-index: -1;
    background: linear-gradient(90deg, rgba(243, 243, 243, 1) 0%, rgba(159, 232, 241, 1) 12%, rgba(0, 186, 207, 1) 42%, rgba(46, 117, 126, 1) 83%, rgba(6, 23, 27, 1) 100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &:hover::before {
    transform: scale(3);
  }

  &:hover {
    color: #212121;
    transform: scale(1.1);
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  &:active {
    transform: scale(1);
  }
`;

// @styled-components
import {
  Layout,
  Contract,
  ImageLayout,
  Title,
  Des,
  Detail,
  TP,
  Time
} from "./ThreadItem.styled";

// @type
type Props = {
  image: any;
  title: string;
  contractName: string;
  endTime: string;
  description: string;
  trustpoint: number;
  follower: string;
  connect: { icon: any; link: string }[];
};



//----------------------------------------------------------------

const Container: React.FC<{ data: Props }> = ({ data }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/thread/vote');
  };

  return (
    <Layout>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '200px' }} />
      </ImageLayout>
      <Time>{data.endTime}</Time>
      <TP>{data.trustpoint} Trust</TP>
      <Contract>{data.contractName}</Contract>
      <Title>{data.title}</Title>
      <Des>{data.description}</Des>
      <Button onClick={handleBackClick}>View thread</Button>
    </Layout>
  );
};
export default Container;
