import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
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
  return (
    <Layout onClick={()=>{
      router.push(`/thread/${data.id}`);
    }}>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '200px' }} />
      </ImageLayout>
      <Time>{data.endTime}</Time>
      <TP>{data.trustpoint} TP&nbsp;</TP>
      <Contract>{data.contractName}</Contract>
      <Title>{data.title}</Title>
      <Des>{data.description}</Des>
      <Detail>
      </Detail>
    </Layout>
  );
};
export default Container;
