import { FC } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "/src/fonts/Roboto/Roboto-Regular.ttf",
});

const styles = StyleSheet.create({
  document: {
    fontFamily: "Roboto",
  },
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    fontFamily: "Roboto",
  },
  section: {
    margin: 10,
    fontFamily: "Roboto",
  },
});

interface IDocumentProps {
  name: string;
  picture: FileList;
}

const MyDocument: FC<IDocumentProps> = ({ name, picture }) => {
  return (
    <Document title="Документ" style={styles.page}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Имя пользователя:</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text>Загруженное изображение:</Text>
          {picture && <Image source={picture[0]} />}
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
