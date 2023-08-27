import React, {useEffect,useState} from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

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

const Container: React.FC<{ data , wallet : Props }> = ({ data , wallet}) => {
  const router = useRouter();
  const contractId = "dev-1693105604198-31429410070805";
  const [userFollow, setUserFollow] = useState(false);
  useEffect(() => {
    const getUserFollow = async () => {
      const userFollow = await wallet.viewMethod({
        method: "get_followed_user_of_space_by_space_id",
        args: {"space_id":data.id},
        contractId,
      });
      userFollow.forEach(user => {
        if(user == wallet.accountId){
          setUserFollow(true);
        }
      });
      const thread = await wallet.viewMethod({
        method: "get_all_threads_of_space_by_space_id",
        args: {"space_id":data.id},
        contractId,
      });
      if(thread){
        thread.forEach(item => {
          thread.initPoint
        });
      }
      console.log(thread);

    };
    getUserFollow().catch(console.error);
    
  },[])
  return (
    <Layout>
      <ImageLayout>
        <Image src={data.image} alt="No Image" layout="fill" style={{ borderRadius: '12px' }} />
      </ImageLayout>
      <Title>{data.title}</Title>
      <Des>{data.description}</Des>
      <TP>{data.trustpoint} TP</TP>
      <Detail>
        <Follower>{data.follower}</Follower>
        <Icons >              
          {data.connect.map((item, index) => (
                <IconButton  key={index}  onClick={ async() => {
                if (!userFollow) {
                  await wallet.startUp("")
                  await wallet.callMethod({
                    method: "follow_space",
                    args: {"space_id":data.id},
                    contractId,
                  });
                }else{
                  router.push(`/space/${data.id}`);
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
