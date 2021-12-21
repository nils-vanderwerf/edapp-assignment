import React, { FC } from "react";
interface VideoProps {
  embedId: string;
  width: string | number;
}
const EmbeddedVideo: FC<VideoProps> = ({ embedId, width }) => {
  return (
    <div>
      <iframe
        src={embedId}
        width={width}
        height="auto"
        allow="accelerometer; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default EmbeddedVideo;
