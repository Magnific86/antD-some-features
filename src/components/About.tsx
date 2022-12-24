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
            тоже какие-то не очевидные. Ниже просто какой-то текст...
          </Text>
          <P style={{ fontSize: "1.5rem", marginTop: 40 }}>
            Experience refers to conscious events in general, more specifically
            to perceptions, or to the practical knowledge and familiarity that
            is produced by these conscious processes. Understood as a conscious
            event in the widest sense, experience involves a subject to which
            various items are presented. In this sense, seeing a yellow bird on
            a branch presents the subject with the objects "bird" and "branch",
            the relation between them and the property "yellow". Unreal items
            may be included as well, which happens when experiencing
            hallucinations or dreams. When understood in a more restricted
            sense, only sensory consciousness counts as experience. In this
            sense, experience is usually identified with perception and
            contrasted with other types of conscious events, like thinking or
            imagining. In a slightly different sense, experience refers not to
            the conscious events themselves but to the practical knowledge and
            familiarity they produce. In this sense, it is important that direct
            perceptual contact with the external world is the source of
            knowledge. So an experienced hiker is someone who actually lived
            through many hikes, not someone who merely read many books about
            hiking. This is associated both with recurrent past acquaintance and
            the abilities learned through them.
          </P>
        </Typography>
      </div>
    );
  }
};
