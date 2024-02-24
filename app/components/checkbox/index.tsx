import { Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./style";
import { useState } from "react";

type Props = {
  checked: boolean;
  onPress: () => void;
};

export const CheckBox = ({ checked, onPress }: Props) => {
  const { checkbox, icon } = styles;

  return (
    <Pressable
      style={({ pressed }) => [
        { ...checkbox },
        checked && { borderColor: "#5E60CE", backgroundColor: "#5E60CE" },
        pressed && {
          borderColor: checked ? "#8284FA" : "#4EA8DE",
          backgroundColor: checked ? "#8284FA" : "#092232",
        },
      ]}
      onPress={onPress}
    >
      {checked && <MaterialIcons name="check" style={icon} size={10} />}
    </Pressable>
  );
};
