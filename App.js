import { View, Text, SafeAreaView } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style= {{backgroundColor: "#eee", flex:1}}>
      <View style= {{backgroundColor: "white", padding: 15}}>
        <Home/>
      </View>
    </SafeAreaView>
  ); 
}
