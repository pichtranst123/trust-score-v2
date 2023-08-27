import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import styled from 'styled-components';

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

const Button = styled.button`
  cursor: pointer;
  position: relative;
  font-size: 18px;
  color: black;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
  position: absolute;
  margin-bottom: 20px;

  bottom: 0;
  left: 10;
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
}`;
// @type
type Props = {
  image: any;
  title: string;
  endTime: string;
  description: string;
  trustpoint: number;
  follower: string;
  thread_id: string;
  connect: { icon: any; link: string }[];
};
//----------------------------------------------------------------
const Container: React.FC<{ data: Props }> = ({ data }) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.push(`/thread/${data.thread_id}`);
  };
  return (
    <Layout>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '200px' }} />
      </ImageLayout>
      <Time>{data.endTime}</Time>
      <TP>{data.trustpoint} TP&nbsp;</TP>
      <Contract>{data.thread_id}</Contract>
      <Title>{data.title}</Title>
      <Des>{data.description}</Des>
      <Button onClick={handleBackClick}>View thread</Button>
    </Layout>
  );
};
export default Container;