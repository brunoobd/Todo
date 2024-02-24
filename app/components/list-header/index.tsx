import { CounterProps, CounterTask } from "../counter-task";
import { styles } from "./style";
import { View } from "react-native";

type Props = {
  counters: Array<CounterProps>;
};

export const ListHeader = ({ counters }: Props) => {
  return (
    <View style={styles.container}>
      {counters.map(({ text, textColor, counter }) => (
        <CounterTask key={text} text={text} textColor={textColor} counter={counter} />
      ))}
    </View>
  );
};
