import React from "react";
import { ScrollView, View, Text } from "react-native";
import HeaderAfterLogin from "../../components/header/headerAfterLogin";
import InstituitionCard from "../../components/InstituitionProps/Instituitions";
import instituicoesData from "../../data/data.json";
import { useNavigation } from "@react-navigation/native";  // Importando o hook de navegação
import InstituitionLogoTitle from "./assets/InstituitionImageTitle.png";
import { Image } from "expo-image";

export default function Instituition() {
  const navigation = useNavigation();  // Hook de navegação

  const handleCardPress = (instituicao) => {
    navigation.navigate("InstituitionDetails", { instituicao });
  };

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
    >
      <View className="bg-white flex-1">
        <HeaderAfterLogin />

        <Image
          source={InstituitionLogoTitle}
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 350 / 140,
          }}
          resizeMode="contain"
        />

        <Text className="text-lg/[24px] text-center py-4 mb-4 text-black">
          Encontre locais que estão de portas abertas para doações de alimentos,
          vestuário e mais.
        </Text>

        <View className="mb-4 justify-center items-center">
          {instituicoesData.map((instituicao) => (
            <InstituitionCard
              key={instituicao.id}
              nome={instituicao.nome}
              nicho={instituicao.nicho}
              imagem={instituicao.imagem}
              onPress={() => handleCardPress(instituicao)} // Passando a instituição para a navegação
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
