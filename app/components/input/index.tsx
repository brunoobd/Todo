import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { useFonts } from "expo-font";

export const Input = ({ value, onChangeText, ...props }: TextInputProps) => {
  const [fontLoaded] = useFonts({
    Inter: require("../../../assets/fonts/Inter.ttf"),
  });
  const [borderColor, setBorderColor] = useState(styles.onBlur.borderColor);

  return (
    <TextInput
      {...props}
      style={{
        ...styles.input,
        fontFamily: fontLoaded ? "Inter" : undefined,
        borderColor,
      }}
      placeholder={"Adicione uma nova tarefa"}
      placeholderTextColor={"#808080"}
      onBlur={() => setBorderColor(styles.onBlur.borderColor)}
      onFocus={() => setBorderColor(styles.onFocus.borderColor)}
      value={value}
      onChangeText={onChangeText}
    />
  );
};
