import React, { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>

    // <NavigationContainer>
    //   {/* <AppStack /> */}
    //   <AuthStack />
    // </NavigationContainer>

    // <NavigationContainer>
    //   {userToken !== null ? <AppStack /> : <AuthStack />}
    // </NavigationContainer>
  );
};

export default AppNav;