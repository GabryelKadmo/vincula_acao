import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import Header from "../../../components/header/header";
import Botao from "../../../components/button/button";
import { SafeAreaView } from "react-native-safe-area-context";
import FakeMap from "../assets/Mapa.png";

export default function InstituitionDetails({ route }) {
  const { instituicao } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="bg-white flex-1"
      >
        <Header />

        <ImageBackground
          source={{ uri: instituicao.backgroundImage }}
          style={{
            width: "100%",
            height: 250,
            justifyContent: "flex-end",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            overflow: "hidden",
          }}
          resizeMode="cover"
        ></ImageBackground>

        <Image
          source={{ uri: instituicao.imagem }}
          style={{
            width: 150,
            height: 150,
            position: "absolute",
            top: 190,
            alignSelf: "center",
            borderRadius: 75,
            borderWidth: 1,
            borderColor: "#DBEDF3",
          }}
          resizeMode="cover"
        />

        <View className="justify-center items-center mt-12">
          <Text className="text-xl font-semibold text-black mt-4 font-montserrat">
            {instituicao.nome}
          </Text>

          <Text className="text-base text-center text-gray-800 mt-4 font-montserrat">
            {instituicao.descricao}
          </Text>

          <View className="mt-6">
            <Text className="text-xl mb-4 text-center font-semibold text-black font-montserrat">
              Endereço
            </Text>
            <Image
              source={FakeMap}
              style={{
                width: 320,
                height: 180,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
          </View>

          <View className="justify-center items-center mt-6">
            <Botao title="Quero doar" titleStyle="text-lg font-medium" />
          </View>

          <Text className="text-xs text-center text-gray-800 mt-6 mb-20 justify-start">
            As doações são realizadas diretamente às instituições, e o app
            Vinculação não se responsabiliza pela gestão {"\n"} dos recursos
            doados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
