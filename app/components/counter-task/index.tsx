import { styles } from "./style";
import { Text, View } from "react-native";

export type CounterProps = {
  text: string;
  textColor: string;
  counter: number;
};

export const CounterTask = ({ text, textColor, counter }: CounterProps) => {
  const { container, title, counterContainer, counterText } = styles;

  return (
    <View style={container}>
      <View style={container}>
        <Text style={{ ...title, color: textColor }}>{text}</Text>
        <View style={counterContainer}>
          <Text style={counterText}>{counter}</Text>
        </View>
      </View>
    </View>
  );
};
