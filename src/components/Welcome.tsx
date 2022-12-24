import { FC, useEffect } from "react";
import { useAppSelector } from "../store/storeHooks";
import { MyCalendar } from "./MyCalendar";
import { Divider, Typography } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { labels } from "./restArrs";

const { Title } = Typography;

export const Welcome: FC = () => {
  const login = useAppSelector((state) => state.login.login);

  const getTitle = (text: string) => {
    document.title = `${text}`;
  };

  useEffect(() => {
    labels.forEach((lab) => {
      getTitle(lab);
    });
  }, []);

  if (login === "welcome") {
    return (
      <div>
        <Title level={2}>
          This calendar looks so cool! Left side bar dont work, navigation on
          select <VerticalAlignTopOutlined />
        </Title>
        <Divider />
        <MyCalendar />
      </div>
    );
  }
};
