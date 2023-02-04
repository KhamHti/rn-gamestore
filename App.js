import { AuthProvider } from "./src/context/AuthContext";
import { useFonts } from "expo-font";

import AppNav from "./src/navigation/AppNav";

const App = () => {
  const [fontsLoaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoItalic: require("./src/assets/fonts/Roboto-Italic.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoMediumItalic: require("./src/assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
