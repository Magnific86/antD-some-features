import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Image, Skeleton } from "antd";

interface IMyImage {
  url: string;
}

export const MyImage: FC<IMyImage> = ({ url }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Image preview={false} style={{ width: 250, height: 250 }} src={url} />
      ) : (
        <Skeleton.Image style={{ width: 250, height: 250 }} />
      )}
    </div>
  );
};
