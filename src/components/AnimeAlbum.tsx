import { FC, useState, ChangeEvent } from "react"
import { Row, Button, Switch, Typography, Input, Col, Image } from "antd"
import { fetchPhotosById, resetAllAlbumPhotos } from "../store/reducers/albumPhotosReducer"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import { photosApi } from "../store/photosService/photosService"

export const AnimeAlbum: FC = () => {
  const dispatch = useAppDispatch()
  const [preview, setPreview] = useState<boolean>(false)
  const [num, setNum] = useState<number | null>(null)
  const { list, isLoading, error } = useAppSelector((state) => state.albumPhotos)
  // const { data: albumPhotos, isLoading, error } = photosApi.useFetchPhotoByIdQuery(121)
  // const [val, setVal] = useState(() => photosApi.useFetchPhotoByIdQuery(121)?.data)
  // console.log("val", val)

  const login = useAppSelector((state) => state.login.login)

  const handleAddPhotos = (n: number) => {
    dispatch(fetchPhotosById(n))
    setNum(0)
  }

  const handleNum = (e: ChangeEvent<HTMLInputElement>) => {
    setNum(Number(e.target.value))
  }

  if (login === "animeAlbum") {
    return (
      <div>
        <div className="flex justify-around">
          <Input type="number" placeholder="fill in some number" value={num} onChange={(e) => handleNum(e)} />
          <Button onClick={() => handleAddPhotos(num)}>add photos!</Button>
          <Button onClick={() => handleAddPhotos(5)}>Just add...</Button>
          <Typography.Title level={5}>Want prewiev?</Typography.Title>
          <Switch onChange={() => setPreview(!preview)} />
        </div>
        <Row>
          {isLoading &&  <div className="loader"/>}
          {error && <h1>Error...</h1>}
          {list && list?.length > 0 && (
            <>
              {list.map(({ jpg: { image_url: url } }) => (
                <Col key={url} span={4}>
                  <Image preview={preview} width={200} src={url} />
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
