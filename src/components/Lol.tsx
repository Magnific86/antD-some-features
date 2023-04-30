import { FC, useState, useEffect } from "react"
import { Row, Col, Button, Switch, Typography, Slider, Divider, Radio, RadioChangeEvent } from "antd"
import { fetchPhotosById, resetAllAlbumPhotos } from "../store/reducers/albumPhotosReducer"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import { AnImage } from "./AnImage"

export const Lol: FC = () => {
  const dispatch = useAppDispatch()
  const [preview, setPreview] = useState<boolean>(false)
  const { albumPhotos, isLoading, error } = useAppSelector((state) => state.albumPhotos)
  const login = useAppSelector((state) => state.login.login)
  const [rows, setRows] = useState<number>(6)
  const [height, setHeigth] = useState<number>(200)
  const [width, setWidth] = useState<number>(200)

  const handleSize = (value: number) => {
    setWidth(value)
    setHeigth(value)
  }

  useEffect(() => {
    if (login === "lol") {
      console.log("login: ", login)
      ;[5, 6, 7, 121, 122, 123, 123, 125, 126, 127, 128, 129, 130, 135, 136, 137, 138].forEach((num) => {
        dispatch(fetchPhotosById(num))
      })
    }
  }, [login])

  const radioBtns = []

  ;[
    {
      key: 2,
    },
    {
      key: 4,
    },
    {
      key: 6,
    },
    {
      key: 8,
    },
    {
      key: 12,
    },
  ].forEach((el) => {
    radioBtns.push(
      <Radio key={el.key} value={el.key} onChange={(e: RadioChangeEvent) => setRows(e.target.value)}>
        {el.key} columns
      </Radio>
    )
  })

  if (login === "lol") {
    return (
      <div className="w-full">
        <div className="mx-auto inline">
          <Typography.Title level={5}>Want prewiev?</Typography.Title>
          <Switch onChange={() => setPreview(!preview)} />
          <Radio.Group defaultValue={6}>{radioBtns}</Radio.Group>
          <Typography.Title level={3}>Change photos size</Typography.Title>
          <Slider min={40} max={800} defaultValue={width} onChange={handleSize} style={{ width: "50%" }} />
        </div>
        <Divider>Photos</Divider>
        <Row>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          {albumPhotos && (
            <>
              {albumPhotos.map((p, index) => (
                <Col key={index} span={24 / rows}>
                  <div
                    style={{ width: width, height: height }}
                    className="bg-transparent border border-red-500 text-center my-2 flex justify-center items-center"
                  >
                    <AnImage preview={preview} width={width} height={height} src={p.jpg.image_url} />
                  </div>
                </Col>
              ))}
              <Button danger onClick={() => dispatch(resetAllAlbumPhotos())}>
                Clear all
              </Button>
            </>
          )}
        </Row>
      </div>
    )
  }
}
