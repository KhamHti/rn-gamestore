import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Message = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("OnBoardingScreen")}>
        <Text>Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Message;
