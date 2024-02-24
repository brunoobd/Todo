import { styles } from "./style";
import { Image, Text, View } from "react-native";

export const ListEmpty = () => {
  const { container, image, text } = styles;

  return (
    <View style={container}>
      <Image
        style={image}
        source={require("../../../assets/images/clipboard.png")}
      />
      <Text style={{ ...text, fontWeight: "bold" }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
};
