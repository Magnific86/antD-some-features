import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { Button, Carousel, Image, Divider } from "antd";
import { getCarPhotos } from "../store/carPhotosReducer";

export const MyCarousel = () => {
  const carPhotos = useAppSelector((state) => state.carPhotos.carPhotos);
  const login = useAppSelector(state => state.login.login)
  const dispatch = useAppDispatch();
  // @ts-ignore
  const ref = useRef(null);

  const fetchCarPhotos = async () => {
    try {
      const resp = await fetch("https://api.jikan.moe/v4/anime/7/pictures");
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error("Cannot fetch");
      }
      dispatch(getCarPhotos(data.data));
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchCarPhotos();
  }, []);

if(login === 'carousel') {
  return (
    <div className="flex flex-col mt-10">
      <Carousel
      autoplay
      dots={false}
        draggable
        style={{
          background: "",
          width: 500,
          height: 500,
          margin: "0 auto",
        }}
        ref={ref}
      >
        {carPhotos &&
          carPhotos.map((p) => (
            <div key={p.jpg.image_url} className="bg-transparent text-center">
          <Image preview={false} style={{width: 450, height: 500, border: '3px solid gold', borderRadius: '5%'}} src={p.jpg.image_url} />
            </div>
          ))}
      </Carousel>
      <Divider />
      <div className="flex justify-center mt-4">
      <Button
        onClick={() => {
          ref?.current.prev();
        }}
      >
        Prev
      </Button>
      <Button style={{margin: '0 10px'}}
        onClick={() => {
          ref?.current.goTo(0);
        }}
      >
        Reset
      </Button>
      <Button
        onClick={() => {
          ref?.current.next();
        }}
      >
        Next
      </Button>
      </div>
      </div>
  );
}
};
