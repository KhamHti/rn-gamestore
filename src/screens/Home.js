import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { freeGames, paidGames, sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utilities/Dimensions";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

const Home = ({ navigation }) => {
  const [gameTab, setGameTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGameTab(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 26, fontFamily: "RobotoMedium" }}>
            Hello Mugiwara
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
          <ImageBackground
            source={require("../assets/img/Luffy.jpeg")}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
          {/* </TouchableOpacity> */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#c6c6c6",
            flexDirection: "row",
            borderRadius: 9,
            paddingHorizontal: 8,
            paddingVertical: 7,
          }}
        >
          <Icon
            name="search-outline"
            color="#c6c6c6"
            size={25}
            style={{ marginRight: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "RobotoMedium" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={sliderData}
          renderItem={({ item }) => <BannerSlider data={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />
        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {/* .map နည်း  */}

        {gameTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subtitile={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}
        {gameTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subtitile={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          ))}

        {/* // flatlist နဲ့ သုံးနည်း */}
        {/* <FlatList
          data={gameTab == 1 ? freeGames : paidGames}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subtitile={item.subtitle}
              isFree={item.isFree}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
