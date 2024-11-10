import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Lupa from "./assets/IconLupa.svg";
import { Image } from "expo-image";

const InstituitionCard = ({ nome, nicho, imagem, onPress }) => {
  return (
    <View className="bg-gray-100 mb-5 rounded-lg shadow-md flex-row p-1.5 w-full relative">
      <Image
        source={{ uri: imagem }}
        style={{ width: 70, height: 70, borderRadius: 10 }}
      />

      <View className="justify-center">
        <Text className="text-lg font-semibold text-black mb-1.5">{nome}</Text>
        <Text className="text-base font-normal text-gray-500 mb-1.5">
          {nicho}
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        className="absolute right-3.5 top-1/2 transform -translate-y-3.5 justify-center items-center"
      >
        <Image source={Lupa} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

export default InstituitionCard;
