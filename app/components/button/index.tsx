import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./style";

type Props = {
  onPress: () => void;
};

export const Button = ({ onPress }: Props) => {
  const { button, buttonPressed, icon } = styles;

  return (
    <Pressable
      style={({ pressed }) => [button, pressed && buttonPressed]}
      onPress={onPress}
    >
      <MaterialIcons name="add-circle-outline" style={icon} size={20} />
    </Pressable>
  );
};
