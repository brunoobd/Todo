import { StatusBar } from "react-native";
import { Home } from "./app/screens/home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      <Home />
    </>
  );
}
