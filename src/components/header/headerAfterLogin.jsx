import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import Logo from "../../assets/Logo.svg";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderAfterLogin = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center p-4 bg-white">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Logo} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Icon name="mail" size={30} className="text-black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderAfterLogin;
