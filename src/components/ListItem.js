import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowWidth } from "../utilities/Dimensions";

const ListItem = ({ photo, isFree, title, subtitile, price, onPress }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={photo}
          style={{ width: 55, height: 55, borderRadius: 8, marginRight: 15 }}
        />
        <View style={{ width: windowWidth - 230 }}>
          <Text
            style={{ color: "#333", fontFamily: "RobotoMedium", fontSize: 16 }}
          >
            {subtitile}
          </Text>

          <Text
            numberOfLines={1}
            style={{
              color: "#333",
              fontFamily: "RobotoMedium",
              fontSize: 16,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 10,
          width: 100,
          borderRadius: 8,
          backgroundColor: "#0aada8",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "RobotoMedium",
          }}
        >
          {isFree == "Yes" ? "Play" : price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
