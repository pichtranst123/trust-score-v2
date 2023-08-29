import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Wallet } from 'near/near-wallet';
import styled from "styled-components";



// @styled-components
import {
  Layout,
  ImageLayout,
  Title,
  Des,
  Detail,
  TP,
  Follower,
  Icons,
  IconButton,
} from "./SpaceItem.styled";

// @type
type Props = {
  image: any;
  title: string;
  description: string;
  trustpoint: number;
  follower: string;
  connect: { icon: any; link: string }[];
};


//----------------------------------------------------------------

const Container: React.FC<{ data: any, wallet: any }> = ({ data, wallet }) => {
  const router = useRouter();
  const contractId: string = process.env.NEXT_PUBLIC_CONTRACT_NAME!;
  const [userFollow, setUserFollow] = useState<boolean>(false);
  const [displayedProducts, setDisplayedProducts] = useState<Props[]>([]); // State để lưu danh sách sản phẩm hiển thị
  const productsPerPage = 6;
  useEffect(() => {
    const getUserFollow = async () => {

      const userFollow = await wallet.viewMethod({
        method: "get_followed_user_of_space_by_space_id",
        args: { "space_id": data.space_id },
        contractId,
      });
      userFollow.forEach((user: any) => {
        if (user == wallet.accountId) {
          setUserFollow(true);
        }
      });
      const thread = await wallet.viewMethod({
        method: "get_all_threads_of_space_by_space_id",
        args: { "space_id": data.space_id },
        contractId,
      });
      if (thread) {
        thread.forEach((item: any) => {
          thread.initPoint
        });
      }
      console.log(thread);

    };
    getUserFollow().catch(console.error);

  }, [])
  return (
    <Layout>
 
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '12px' }} />
      </ImageLayout>
      <Title>{data.space_name}</Title>
      <Des>{data.description}</Des>
      <TP>{data.total_point} TP</TP>
      <Detail>

        <Follower>{data.followed_users?.length} follower(s)</Follower>
        <Icons >
          {data.connect.map((item: any, index: any) => (
            <IconButton key={index} onClick={async () => {
              if (!userFollow) {
                await wallet.startUp();
                await wallet.callMethod({
                  method: "follow_space",
                  args: { "space_id": data.space_id },
                  contractId,
                });
                setUserFollow(true);
                router.push(`/space/${data.space_id}`);
              } else {
                router.push(`/space/${data.space_id}`);
              }
            }} >
              {userFollow ? "Join" : "Follow "}
              {userFollow ? "" : <item.icon />}
            </IconButton>
          ))}
        </Icons>
      </Detail>
    </Layout>
  );
};
export default Container;