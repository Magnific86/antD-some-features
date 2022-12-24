import { FC, useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Switch,
  Typography,
  Slider,
  Divider,
  Radio,
  RadioChangeEvent,
} from "antd";
import {
  getAlbumPhotos,
  resetAllAlbumPhotos,
} from "../store/albumPhotosReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { AnImage } from "./AnImage";

export const Lol: FC = () => {
  const dispatch = useAppDispatch();
  const [preview, setPreview] = useState<boolean>(false);
  const albumPhotos = useAppSelector((state) => state.albumPhotos.albumPhotos);
  const login = useAppSelector((state) => state.login.login);
  const [rows, setRows] = useState<number>(6);
  const [height, setHeigth] = useState<number>(200);
  const [width, setWidth] = useState<number>(200);

  const handleSize = (value: number) => {
    setWidth(value);
    setHeigth(value);
  };

  useEffect(() => {
    if (login === "lol") {
      [
        5, 6, 7, 121, 122, 123, 123, 125, 126, 127, 128, 129, 130, 135, 136,
        137, 138,
      ].forEach((num) => {
        fetchAlbumPhotos(num);
      });
    }
  }, [login]);

  const fetchAlbumPhotos = async (id: number) => {
    try {
      const resp = await fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`);
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error("Cannot fetch");
      }
      dispatch(getAlbumPhotos(data.data));
    } catch (e) {
      console.error(e.message);
    }
  };

  const handle2Cols = (e: RadioChangeEvent) => {
    setRows(e.target.value);
  };

  const handle4Cols = (e: RadioChangeEvent) => {
    setRows(e.target.value);
  };

  const handle6Cols = (e: RadioChangeEvent) => {
    setRows(e.target.value);
  };

  const handle8Cols = (e: RadioChangeEvent) => {
    setRows(e.target.value);
  };

  const handle12Cols = (e: RadioChangeEvent) => {
    setRows(e.target.value);
  };

  if (login === "lol") {
    return (
      <div className="w-full">
        <div className="mx-auto inline">
          <Typography.Title level={5}>Want prewiev?</Typography.Title>
          <Switch onChange={() => setPreview(!preview)} />
          <Radio.Group defaultValue={6}>
            <Radio value={2} onChange={handle2Cols}>
              2 columns
            </Radio>
            <Radio value={4} onChange={handle4Cols}>
              4 columns
            </Radio>
            <Radio value={6} onChange={handle6Cols}>
              6 columns
            </Radio>
            <Radio value={8} onChange={handle8Cols}>
              8 columns
            </Radio>
            <Radio value={12} onChange={handle12Cols}>
              12 columns
            </Radio>
          </Radio.Group>
          <Typography.Title level={3}>Change photos size</Typography.Title>
          <Slider
            min={40}
            max={800}
            defaultValue={width}
            onChange={handleSize}
            style={{ width: "50%" }}
          />
        </div>
        <Divider>Photos</Divider>
        <Row>
          {albumPhotos &&
            albumPhotos.map((p) => (
              <Col span={24 / rows}>
                <div
                  style={{ width: width, height: height }}
                  className="bg-transparent border border-red-500 text-center my-2 flex justify-center items-center"
                >
                  <AnImage
                    key={p.jpg.image_url}
                    preview={preview}
                    width={width}
                    height={height}
                    src={p.jpg.image_url}
                  />
                </div>
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
