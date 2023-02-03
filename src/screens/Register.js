import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from "react-native-date-picker";

import RegisterSVG from "../assets/svg/registration.svg";
import FacebookSVG from "../assets/svg/facebook.svg";
import GoogleSVG from "../assets/svg/google.svg";
import TwitterSVG from "../assets/svg/twitter.svg";

import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

const Register = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState("Date of Birth :");

  // const ggwp = (
  //   <DatePicker
  //     modal
  //     open={open}
  //     date={date}
  //     mode={date}
  //     maximumDate={new Date("2006-01-01")}
  //     manimumDate={new Date("1980-01-01")}
  //     onConfirm={(data) => {
  //       setOpen(false);
  //       setDate(date);
  //       setDobLabel(data.toDatString());
  //     }}
  //     onCancel={() => {
  //       setOpen(false);
  //     }}
  //   />
  // );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <RegisterSVG
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>
        <Text
          style={{
            fontFamily: "RobotoMedium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 40,
          }}
        >
          Register
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

        <Text style={{ marginBottom: 20, color: "#666", textAlign: "center" }}>
          Register with email...
        </Text>

        <InputField
          label={"Full Name :"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <InputField
          label={"Email :"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-addres"
        />
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
        />
        <InputField
          label={"Confirm Password :"}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        {/* dob label */}

        {/* <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text
              style={{
                color: "#666",
                marginLeft: 3,
                marginTop: 3,
                fontSize: 16,
              }}
            >
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* dob label datepicker */}
        {/* <DatePicker
          modal
          date={date}
          open={open}
          mode={date}
          maximumDate={new Date("2005-01-01")}
          minimumDate={new Date("1980-01-01")}
          onConfirm={(date) => {
            setDate(setDate);
            setOpen(false);
            setDobLabel(date.toDateString());
          }}
          onCancel={(date) => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={"Register"} onPress={() => {}} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 16 }}>Already register?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: "#ad40af",
                fontWeight: "700",
                paddingLeft: 5,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
