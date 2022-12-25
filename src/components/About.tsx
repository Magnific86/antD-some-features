import { useAppSelector } from "../store/storeHooks";
import { Typography } from "antd";

const { Title, Text, Paragraph: P } = Typography;

export const About = () => {
  const login = useAppSelector((state) => state.login.login);

  if (login === "about") {
    return (
      <div className="container flex mx-auto">
        <Typography>
          <Title style={{ textAlign: "center" }} level={1}>
            AntD first Experience
          </Title>
          <Text style={{ fontSize: "3rem" }}>
            Применил AntD, вот что получилось, как по мне, не хватает какой-то
            гибкости в использовании и не очевидные пропсы, поэтому приходится
            постоянно что-то гуглить или искать в файлах, документация и это апи
            тоже какие-то не очевидные.
          </Text>
          <P style={{ fontSize: "1.5rem", marginTop: 40 }}>
            Добавил заглушку для не загруженных фото скелетон компонентом,
            хлебные крошки. поменял некоторые иконки..
          </P>
        </Typography>
      </div>
    );
  }
};
