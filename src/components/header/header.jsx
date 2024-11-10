import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center p-4 bg-white">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={26} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Icon name="mail" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
