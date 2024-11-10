import React from "react";
import { Text, View, ScrollView } from "react-native";
import "../../styles/global.css";
import Botao from "../../components/button/button";
import Header from "../../components/header/header";
import InputContact from "../../components/input/inputContact";
import TextArea from "../../components/textarea/textarea";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoTitleContact from "./assets/ContactImageTitle.svg";
import { Image } from "expo-image";

export default function Contact() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="flex-1"
      >
        <Header />
        <View className="pt-4 justify-center items-center">
          <Image
            source={LogoTitleContact}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 350 / 140,
            }}
            resizeMode="contain"
          />
          <Text className="text-xl text-center text-black py-4 mb-4 w-full font-normal">
            Dúvidas, sugestões ou deseja se conectar? {"\n"}
            Estamos aqui para ajudar.
          </Text>
        </View>

        <View className="mb-4 justify-center items-center">
          <View className="w-full">
            <InputContact
              label="E-mail"
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />
            <TextArea
              label="Mensagem"
              placeholder="Deixe sua mensagem ou sugestão...."
            />
          </View>
        </View>

        <View className="justify-center items-center mt-6">
          <Botao
            title="Enviar Mensagem"
            titleStyle={{ fontWeight: "medium" }}
            buttonStyle="!bg-salmao"
          />
        </View>

        <Text className="text-xl text-center text-black mt-6 py-4 mb-4 w-full font-normal">
          Quer saber mais? Acompanhe nossas redes sociais e fique por dentro das
          campanhas.
        </Text>

        <View className="flex-row justify-center items-center gap-4 mb-16">
          <Image
            source={require("./assets/facebook.svg")}
            style={{ width: 28, height: 28 }}
          />
          <Image
            source={require("./assets/instagram.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("./assets/twitter.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("./assets/threads.svg")}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require("./assets/linkedin.svg")}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
