import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  counterContainer: {
    padding: 2,
    paddingHorizontal: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
  },
  counterText: {
    fontSize: 12,
    fontWeight: "bold",
    color: '#D9D9D9'
  }
});
