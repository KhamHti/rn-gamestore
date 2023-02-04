import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import GamingImg from "../assets/svg/gaming.svg";

const OnBoardingScreen = ({ navigation }) => {
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GamingImg
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
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

export default OnBoardingScreen;
