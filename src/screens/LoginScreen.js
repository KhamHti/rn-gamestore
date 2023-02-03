import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginSVG from "../assets/svg/login.svg";
import FacebookSVG from "../assets/svg/facebook.svg";
import GoogleSVG from "../assets/svg/google.svg";
import TwitterSVG from "../assets/svg/twitter.svg";
import InputField from "../components/InputField";
import { AuthContext } from "../context/AuthContext";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <LoginSVG
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>
        <Text
          style={{
            fontFamily: "RobotoMedium",
            fontSize: 26,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingBottom: 8,
            marginBottom: 30,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email :"
            style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
            keyboardType="email-address"
          />
        </View>
        <InputField
          label={"Password :"}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        {/* <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password :"
            style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#ad40af", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View> */}

        <CustomButton
          label={"Login"}
          onPress={() => {
            login();
          }}
        />

        {/* <TouchableOpacity
          onPress={() => {
            login();
          }}
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
            Login
          </Text>
        </TouchableOpacity> */}

        <Text style={{ marginBottom: 20, color: "#666", textAlign: "center" }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 16 }}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                fontSize: 16,
                color: "#ad40af",
                fontWeight: "700",
                paddingLeft: 5,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
