import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { FC, useRef } from "react";
import { AnimeAlbum } from "./components/AnimeAlbum";
import { MyCarousel } from "./components/MyCarousel";
import { UsersTable } from "./components/UsersTable";
import { setCollapse } from "./store/collapsReducer";
import { useAppDispatch, useAppSelector } from "./store/storeHooks";
import { Menu } from "antd";
import { MenuProps, Typography } from "antd";
import {
  DesktopOutlined,
  HomeTwoTone,
  UserOutlined,
  QuestionCircleOutlined,
  PictureOutlined,
  GithubOutlined,
  AreaChartOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { About } from "./components/About";
import { setLogin } from "./store/loginReducer";
import { FormUser } from "./components/FormUser";
import { Welcome } from "./components/Welcome";
import { ManyPhoto } from "./components/ManyPhoto";
import { Lol } from "./components/Lol";

export const App: FC = () => {
  const collapse = useAppSelector((state) => state.collapse.collapse);
  const users = useAppSelector((state) => state.users.users);
  const login = useAppSelector((state) => state.login.login);
  const dispatch = useAppDispatch();
  //@ts-ignore //я не знаю как описывать рефы в антд, там свои синтетик ивенты у каждого
  const loginRef = useRef(null);
  const { Header, Footer, Content } = Layout;
  type MenuItem = Required<MenuProps>["items"][number];

  const { Link, Title } = Typography;

  const loginHandler = (loginType: string): void => {
    dispatch(setLogin(loginType));
  };

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getItem("About", "about", <QuestionCircleOutlined />),
    getItem("Fetch animePhotos", "animeAlbum", <DesktopOutlined />),
    getItem("Users", "usersTable", <UserOutlined />),
    getItem("Stock Photos", "manyPhotos", <AreaChartOutlined />),
    getItem("Carousel", "carousel", <PictureOutlined />),
    getItem("More", "lol", <FolderOpenOutlined />),
  ];

  return (
    <>
      <Layout>
        <Sider
          collapsible
          collapsed={collapse}
          onCollapse={() => dispatch(setCollapse())}
        >
          <div
            onClick={() => dispatch(setLogin("welcome"))}
            style={{
              textAlign: "center",
              height: 32,
              margin: 16,
            }}
          >
            <HomeTwoTone />
          </div>
          <Menu
            onClick={({ key }) => loginHandler(key)}
            theme="dark"
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header>
            <div className="flex justify-between text-teal-400 text-3xl">
              <Typography.Title
                style={{
                  color: "midnightblue",
                  textAlign: "right",
                  width: "50%",
                }}
              >
                AntD
              </Typography.Title>
              <Link
                href="https://github.com/Magnific86/antD-some-features"
                target={"_blank"}
              >
                <GithubOutlined />
              </Link>
            </div>
          </Header>
          <Content>
            <Welcome />
            <About />
            <FormUser />
            <AnimeAlbum />
            <MyCarousel />
            <UsersTable />
            <ManyPhoto />
            <Lol />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
