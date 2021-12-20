import React, { FC } from "react";
interface VideoProps {
  embedId: string;
  width: string | number;
  height: string | number;
}
const EmbeddedVideo: FC<VideoProps> = ({ embedId, width, height }) => {
  return (
    <div>
      <iframe
        src={embedId}
        width={width}
        height={height}
        allow="accelerometer; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default EmbeddedVideo;
