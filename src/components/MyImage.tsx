import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Image, Row, Col, Button, Switch, Typography } from "antd";

interface IMyImage {
  url: string;
}

export const MyImage: FC<IMyImage> = ({ url }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Image preview={false} style={{ width: 250, height: 250 }} src={url} />
      ) : (
        <div style={{ width: 250, height: 250, background: "gray" }}></div>
      )}
    </div>
  );
};
