import { View, Text, ImageBackground, Image } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#C3ACD0" }}
      >
        <ImageBackground
          source={require("../assets/img/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/img/Luffy.jpeg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "RobotoMedium",
              marginBottom: 10,
            }}
          >
            Luffy
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "RobotoRegular",
                marginRight: 10,
              }}
            >
              4600 Coins
            </Text>
            <FontAwesome5 name="coins" size={16} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopColor: "#ccc", borderTopWidth: 1 }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={16} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "RobotoMedium",
                marginHorizontal: 10,
              }}
            >
              Tell a friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={16} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "RobotoMedium",
                marginHorizontal: 10,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
