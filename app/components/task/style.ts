import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonPressed: {
    backgroundColor: "#333333",
  },
  icon: {
    color: "#808080",
  },
  iconPressed: {
    color: "#E25858",
  },
});
