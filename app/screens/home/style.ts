import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTop: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },
  logo: {
    width: 150,
    height: 40,
  },
  containerBottom: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  form: {
    width: "90%",
    marginTop: -28,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  list: {
    width: "90%",
    paddingBottom: 100,
  },
});
