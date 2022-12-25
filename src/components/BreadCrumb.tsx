import { Breadcrumb, Layout } from "antd";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { labels } from "./restArrs";
import { HomeOutlined } from "@ant-design/icons";
import { setLogin } from "../store/loginReducer";
import { FC } from "react";

export const BreadCrumb: FC = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.login.login);
  const breadArr = [];

  labels.forEach((lab) => {
    if (login === lab) {
      breadArr.push(
        <Breadcrumb.Item onClick={() => dispatch(setLogin(lab))}>
          <p className="text-2xl">{lab}</p>
        </Breadcrumb.Item>
      );
    }
  });

  /*  "welcome",
  "about",
  "animeAlbum",
  "formUser",
  "carousel",
  "usersTable",
  "manyPhotos",
  "lol", */

  return (
    <div className="flex px-6 py-6">
      <Breadcrumb separator=">">
        <Breadcrumb.Item onClick={() => dispatch(setLogin("welcome"))}>
          <HomeOutlined style={{ fontSize: "1.5rem" }} />
        </Breadcrumb.Item>
        {breadArr}
      </Breadcrumb>
    </div>
  );
};
