import { Pressable, StyleProp, Text, TextStyle, View } from "react-native";
import { styles } from "./style";
import { TaskType } from "../../model";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CheckBox } from "../checkbox";

type Props = {
  task: TaskType;
  onToggle: () => void;
  onRemove: () => void;
};

export const Task = ({ task, onToggle, onRemove }: Props) => {
  const { container, button, buttonPressed, icon, iconPressed } = styles;
  const { name, completed } = task;

  let textStyle: StyleProp<TextStyle> = {
    color: "#F2F2F2",
    textDecorationLine: "none",
  };

  if (completed) {
    textStyle = {
      color: "#808080",
      textDecorationLine: "line-through",
    };
  }

  return (
    <View style={container}>
      <CheckBox checked={completed} onPress={onToggle}/>
      <Text style={{ fontSize: 14, width: '75%', ...textStyle }}>{name}</Text>
      <Pressable
        style={({ pressed }) => [button, pressed && buttonPressed]}
        onPress={onRemove}
      >
        {({ pressed }) => {
          return (
            <MaterialIcons
              name="delete-outline"
              style={[icon, pressed && iconPressed]}
              size={25}
            />
          );
        }}
      </Pressable>
    </View>
  );
};
