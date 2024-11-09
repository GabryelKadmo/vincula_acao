import React from "react";
import { Text, View, Image } from "react-native";
import "../../styles/global.css";
import Botao from "../../components/button/button";
import Header from "../../components/header/header";
import { colors } from "../../styles/colors";
import InputContact from "../../components/input/inputContact";
import TextArea from "../../components/textarea/textarea";

export default function Contact() {
  return (
    <View style={{ backgroundColor: colors.white }} className="flex-1 ">
      <Header />
      <View className="pt-4 justify-center items-center">
        <View>
          <Image source={require("./assets/ContactImageTitle.svg")} />
        </View>
        <Text
          style={{ color: colors.black, fontWeight: 400 }}
          className="text-xl/[24px] text-center px-4 py-4 mb-4 w-3/3"
        >
          Dúvidas, sugestões ou deseja se conectar? {"\n"}
          Estamos aqui para ajudar.
        </Text>
      </View>

      <View className="px-4 mb-4">
        <InputContact
          label="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
      </View>

      <View className="px-4 mb-6">
        <TextArea
          label="Mensagem"
          placeholder="Deixe sua mensagem ou sugestão...."
          onChangeText={(text) => console.log(text)}
          style={{ backgroundColor: colors.gelo }}
        />
      </View>

      <View className="justify-center items-center">
        <Botao
          title="Enviar mensagem"
          titleStyle={{ fontSize: 18, fontWeight: "medium" }}
          buttonStyle={{
            backgroundColor: colors.salmao,
            padding: 24,
            margin: 0,
          }}
        />
      </View>
      <Text
        style={{ color: colors.black, fontWeight: 400 }}
        className="text-xl/[24px] text-center mt-6 px-4 py-4 mb-4 w-3/3"
      >
        Quer saber mais? Acompanhe nossas redes sociais e fique por dentro das
        campanhas.
      </Text>
      <View>
        <View className="flex-row justify-center items-center gap-4">
          <Image source={require("./assets/facebook.svg")} />
          <Image source={require("./assets/instagram.svg")} />
          <Image source={require("./assets/twitter.svg")} />
          <Image source={require("./assets/threads.svg")} />
          <Image source={require("./assets/linkedin.svg")} />
        </View>
      </View>
    </View>
  );
}
