import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GamingImg from "./src/assets/svg/gaming.svg";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({ navigation }) => {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoItalic: require("./src/assets/fonts/Roboto-Italic.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoMediumItalic: require("./src/assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#20315f",
            fontFamily: "InterBold",
          }}
        >
          GAMEONE
        </Text>
      </View>
      {/* <Image source={require("./assets/img/ps5.png")} /> */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GamingImg
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          flexDirection: "row",
          backgroundColor: "#ad40af",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "RobotoMedium",
          }}
        >
          Let's Begin
        </Text>
        <Icon name="arrow-right-thick" size={22} style={{ color: "#fff" }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
