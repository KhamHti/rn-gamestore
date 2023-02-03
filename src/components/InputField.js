import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: "#ad40af", fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
