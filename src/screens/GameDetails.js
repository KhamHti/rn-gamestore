import { View, Text } from "react-native";
import React from "react";

const GameDetails = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#84D2C5",
      }}
    >
      <Text>GameDetails</Text>
      <Text>{route.params?.title}</Text>
      <Text>{route.params?.price}</Text>
    </View>
  );
};

export default GameDetails;
