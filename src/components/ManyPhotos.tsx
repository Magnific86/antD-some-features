import { useState, FC } from "react";
import { Row, Typography, Divider } from "antd";
import { useAppSelector } from "../store/storeHooks";
import { MyImage } from "./MyImage";

export interface IPhoto {
  id: number;
  title: string;
  url: string;
}

export interface PhotosState {
  photos: IPhoto[];
}

export const ManyPhotos: FC = () => {
  const login = useAppSelector((state) => state.login.login);
  const [loader, setLoader] = useState<boolean>(true);
  const [photos, setPhotos] = useState<IPhoto[] | null>((): any => {
    (async (): Promise<any> => {
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=500"
        );
        const data = await resp.json();
        if (data) {
          setPhotos(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoader(false);
      }
    })();
  });

  if (login === "manyPhotos") {
    return (
      <div className="container mx-auto">
        <Typography.Title style={{ textAlign: "center" }}>
          There are 500 example photos with lazy loading...{" "}
        </Typography.Title>
        <Divider style={{ height: 60 }}>(Used intersection observer)</Divider>
        <Row>
          {!loader ? (
            photos.map((p) => <MyImage url={p.url} key={p.id} />)
          ) : (
            <div className="loader"/>
          )}
        </Row>
      </div>
    );
  }
};
