import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { Wrapper } from "./styled";

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <BarLoader width={100} />
    </Wrapper>
  );
};

export default Loading;
