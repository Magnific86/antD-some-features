import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { FC, ChangeEvent, useRef } from "react";
import { AnimeAlbum } from "./components/AnimeAlbum";
import { MyCarousel } from "./components/MyCarousel";
import { UsersTable } from "./components/UsersTable";
import { setCollapse } from "./store/collapsReducer";
import { useAppDispatch, useAppSelector } from "./store/storeHooks";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { About } from "./components/About";
import { setLogin } from "./store/loginReducer";
import { FormUser } from "./components/FormUser";
import { Welcome } from "./components/Welcome";
import { ManyPhoto } from "./components/ManyPhoto";
import { Lol } from "./components/Lol";
import { selectArray } from "./components/restArrs";

export const App: FC = () => {
  const collapse = useAppSelector((state) => state.collapse.collapse);
  const users = useAppSelector((state) => state.users.users);
  const login = useAppSelector((state) => state.login.login);
  const dispatch = useAppDispatch();
  //@ts-ignore //я не знаю как описывать рефы в антд, там свои синтетик ивенты у каждого
  const loginRef = useRef(null);
  const { Header, Footer, Content } = Layout;
  type MenuItem = Required<MenuProps>["items"][number];

  //нужно сделать логин
  const loginHandler = (loginType: string): void => {
    dispatch(setLogin(loginType));
  };

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    action?: (loginType: string) => void //action для выбора состояния
  ): MenuItem => {
    return {
      key,
      icon,
      label,
    };
  };

  const getItemChildren = (
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

  const a = () => {
    return users.map((u) => getItem(u.name, u.id));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLogin(e.target.value));
  };

  const items: MenuItem[] = [
    getItem("About", "About", <PieChartOutlined />),
    getItem("FormUser", "FormUser", <DesktopOutlined />),
    getItemChildren("User", "sub1", <UserOutlined />, a()),
    getItemChildren("Photos", "Photos", <TeamOutlined />, [
      getItem("Album 1", "6"),
      getItem("Album 2", "8"),
    ]),
  ];

  /* useEffect(() => {
    dispatch(setLogin(loginRef?.current.value));
  }, [loginRef]); */

  return (
    <>
      <Layout>
        <Sider
          collapsible
          collapsed={collapse}
          onCollapse={() => dispatch(setCollapse())}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu theme="dark" mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header>
            <div className="flex justify-around text-teal-400 text-3xl">
              <h1>AntD</h1>
              <select
                className="bg-transparent outline-none"
                onChange={(e) => handleSelect(e)}
              >
                {selectArray}
              </select>
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
