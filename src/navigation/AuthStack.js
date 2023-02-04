import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DNavigation from "./DNavigation";
import GameDetails from "../screens/GameDetails";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DNavigation"
        component={DNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
