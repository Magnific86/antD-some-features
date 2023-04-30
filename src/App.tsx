import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import React, { FC } from "react"
import { AnimeAlbum } from "./components/AnimeAlbum"
import { MyCarousel } from "./components/MyCarousel"
import { UsersTable } from "./components/UsersTable"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { Menu } from "antd"
import { MenuProps, Typography } from "antd"
import {
  BgColorsOutlined, UserOutlined,
  PictureOutlined,
  GithubOutlined,
  AreaChartOutlined,
  FolderOpenOutlined
} from "@ant-design/icons"
import { FormUser } from "./components/FormUser"
import { ManyPhotos } from "./components/ManyPhotos"
import { Lol } from "./components/Lol"
import { BreadCrumb } from "./components/BreadCrumb"
import { setLogin } from "./store/reducers/loginReducer"
import { setCollapse } from "./store/reducers/collapsReducer"

export const App: FC = () => {
  const collapse = useAppSelector((state) => state.collapse.collapse)
  const dispatch = useAppDispatch()
  const { Header, Content } = Layout
  type MenuItem = Required<MenuProps>["items"][number]

  const { Link } = Typography

  const loginHandler = (loginType: string): void => {
    dispatch(setLogin(loginType))
  }

  const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem("Users", "usersTable", <UserOutlined />),
    getItem("Fetch some photos", "animeAlbum", <BgColorsOutlined />),
    getItem("Stock Photos", "manyPhotos", <AreaChartOutlined />),
    getItem("Carousel", "carousel", <PictureOutlined />),
    getItem("More", "lol", <FolderOpenOutlined />),
  ]

  return (
    <Layout>
      <Sider collapsible collapsed={collapse} onCollapse={() => dispatch(setCollapse())}>
        <Menu
          defaultActiveFirst
          defaultChecked
          defaultValue={items[0].key}
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
            <Link href="https://github.com/Magnific86/antD-some-features" target={"_blank"}>
              <GithubOutlined />
            </Link>
          </div>
        </Header>
        <Content>
          <Layout>
            <BreadCrumb />
            <FormUser />
            <AnimeAlbum />
            <MyCarousel />
            <UsersTable />
            <ManyPhotos />
            <Lol />
          </Layout>
        </Content>
      </Layout>
    </Layout>
  )
}
