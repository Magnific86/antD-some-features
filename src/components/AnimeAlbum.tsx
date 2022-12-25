import { FC, useState, ChangeEvent, useEffect } from "react";
import { Image, Row, Col, Button, Switch, Typography, Input } from "antd";
import {
  getAlbumPhotos,
  resetAllAlbumPhotos,
} from "../store/albumPhotosReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";

export const AnimeAlbum: FC = () => {
  const dispatch = useAppDispatch();
  const [preview, setPreview] = useState<boolean>(false);
  const [num, setNum] = useState<number | null>(null);
  const albumPhotos = useAppSelector((state) => state.albumPhotos.albumPhotos);
  const login = useAppSelector((state) => state.login.login);

  useEffect(() => {
    if (login === "animeAlbum") {
      dispatch(resetAllAlbumPhotos());
    }
  }, [login]);

  const fetchAlbumPhotos = async (id: number) => {
    try {
      const resp = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`);
      const data = await resp.json();
      console.log(data.data);

      console.log(data.data[0].jpg.image_url);

      if (!resp.ok) {
        throw new Error("Cannot fetch");
      }
      dispatch(getAlbumPhotos(data.data));
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleAddPhotos = (n: number) => {
    fetchAlbumPhotos(n);
    setNum(0);
  };

  const handleNum = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value));
  };

  if (login === "animeAlbum") {
    return (
      <div>
        <div className="flex justify-around">
          <Input
            type="number"
            placeholder="fill in some number"
            value={num}
            onChange={(e) => handleNum(e)}
          />
          <Button onClick={() => handleAddPhotos(num)}>add photos!</Button>
          <Button onClick={() => handleAddPhotos(5)}>Just add...</Button>
          <Typography.Title level={5}>Want prewiev?</Typography.Title>
          <Switch onChange={() => setPreview(!preview)} />
        </div>
        <Row>
          {albumPhotos &&
            albumPhotos.map((p) => (
              <Col span={4}>
                <Image
                  key={p.jpg.image_url}
                  preview={preview}
                  width={200}
                  src={p.jpg.image_url}
                />
              </Col>
            ))}
          {albumPhotos && albumPhotos.length > 0 && (
            <Button danger onClick={() => dispatch(resetAllAlbumPhotos())}>
              Clear all
            </Button>
          )}
        </Row>
      </div>
    );
  }
};
