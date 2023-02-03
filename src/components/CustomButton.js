import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#ad40af",
        padding: 20,
        borderRadius: 30,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
