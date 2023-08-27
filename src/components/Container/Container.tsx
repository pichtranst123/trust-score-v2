import React from "react";

// @styled-components
import { Layout } from "./Container.styled";

// @type
type Props = {
  children: React.ReactNode;
};

//----------------------------------------------------------------

const Container: React.FC<Props> = ({ children }: any) => {
  return <Layout>{children}</Layout>;
};
export default Container;
  