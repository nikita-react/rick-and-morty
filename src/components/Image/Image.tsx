import React, { Suspense } from "react";
import { useImage } from "react-image";
import { Img } from "./styled";

interface ImageProps {
  width?: string;
  imageSrc: string;
}

const MyImageComponent: React.FC<ImageProps> = ({ imageSrc, width }) => {
  const { src } = useImage({
    srcList: imageSrc,
  });

  return <Img src={src} width={width} alt="" />;
};

const ImageComponent: React.FC<ImageProps> = ({ imageSrc, width }) => {
  return (
    <Suspense>
      <MyImageComponent imageSrc={imageSrc} width={width} />
    </Suspense>
  );
};
export default ImageComponent;
