import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 45,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#ad40af",
        backgroundColor: "#e4e4e4",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: getSelectionMode == 1 ? "#ad40af" : "#e4e4e4",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "#fff" : "#ad40af",
            fontSize: 16,
            fontFamily: "RobotoMedium",
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: getSelectionMode == 2 ? "#ad40af" : "#e4e4e4",
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "#fff" : "#ad40af",
            fontSize: 16,
            fontFamily: "RobotoMedium",
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
