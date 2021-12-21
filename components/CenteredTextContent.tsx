import React, { FC } from "react";

interface ImageContentProps {
  image: string;
  content: JSX.Element;
  alt: string;
}

const CenteredTextContent: FC<ImageContentProps> = ({
  image,
  alt,
  content
}) => {
  return (
    <>
      <div className="container">
        <img src={image} alt={alt} />
        {content}
      </div>
    </>
  );
};

export default CenteredTextContent;
