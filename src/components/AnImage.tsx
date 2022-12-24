import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "antd";

interface IAnImageProps {
  src: string;
  preview: boolean;
  width: number;
  height: number;
}

export const AnImage: FC<IAnImageProps> = ({ src, preview, width, height }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Image
          preview={preview}
          style={{ width: width, height: height }}
          src={src}
        />
      ) : (
        <div
          style={{ width: width, height: height, background: "gray" }}
        ></div>
      )}
    </div>
  );
};
