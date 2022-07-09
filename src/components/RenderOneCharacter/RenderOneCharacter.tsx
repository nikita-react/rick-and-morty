import React from "react";
import { useParams } from "react-router-dom";

const RenderOneCharacter: React.FC = () => {
  const params = useParams();
  console.log(params);

  return <div>RenderOneCharacter</div>;
};

export default RenderOneCharacter;
