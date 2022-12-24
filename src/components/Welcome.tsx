import { FC } from "react";
import { useAppSelector } from "../store/storeHooks";
import { MyCalendar } from "./MyCalendar";
import { Image, Row, Col, Button, Switch, Typography } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph: P } = Typography;

export const Welcome: FC = () => {
  const login = useAppSelector((state) => state.login.login);
  if (login === "welcome") {
    return (
      <div>
        <Title level={2}>
          This calendar looks so cool! Left side bar dont work, navigation on
          select <VerticalAlignTopOutlined />
        </Title>
        <MyCalendar />
      </div>
    );
  }
};
