import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../styles/colors";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: colors.white }} className="flex-row justify-between items-center p-4">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={26} color={colors.black} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Ícone de e-mail pressionado")}>
        <Icon name="mail" size={26} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
