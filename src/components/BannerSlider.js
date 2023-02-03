import { View, Text, Image } from "react-native";
import React from "react";

export default function BannerSlider({ data }) {
  return (
    <View>
      <Image
        source={data.image}
        style={{ height: 160, width: 350, borderRadius: 10 }}
      />
    </View>
  );
}
