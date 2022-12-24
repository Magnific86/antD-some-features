import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../store/storeHooks";
import { MyCalendar } from "./MyCalendar";
import { Divider, Switch, Typography } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { labels } from "./restArrs";

const { Title } = Typography;

export const Welcome: FC = () => {
  const login = useAppSelector((state) => state.login.login);
  const [calendar, setCalendar] = useState<boolean>(true);

  const handleHideCalendar = () => {
    setCalendar(!calendar);
  };

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
      <div className="mt-4 text-center">
        <Title >Main Page</Title>
          <Switch
            unCheckedChildren="Hide calendar"
            checkedChildren="Open calendar"
            onChange={handleHideCalendar}
          />
        <Divider />
        <MyCalendar show={calendar} />
      </div>
    );
  }
};
