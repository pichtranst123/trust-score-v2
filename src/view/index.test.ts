import React from "react";
import dynamic from "next/dynamic";
import { Thread } from "./Thread/Thread"; // Điều chỉnh đường dẫn tới component Thread
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const navigateToSpace = () => {
    router.push("/space");
  };

  const navigateToThread = () => {
    router.push("/thread");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToSpace}>Go to Space Page</button>
      <button onClick={navigateToThread}>Go to Thread Page</button>
    </div>
  );
};

export { Thread as DynamicThread };

export default Home;
