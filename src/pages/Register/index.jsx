import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/input";
import Botao from "../../components/button/button";
import Header from "../../components/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterLogoTitle from "./assets/RegisterLogoTitle.svg";
import { Image } from "expo-image";

export default function Register() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }} className="bg-white flex-1">
        <View className="bg-white flex-1">
          <Header />
          <View className="pt-0 justify-center items-center">
            <Image
              source={RegisterLogoTitle}
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 390 / 140,
              }}
              resizeMode="contain"
            />
          </View>

          <View className="flex-1 justify-start items-center mt-0">
            <Text className="text-4xl/[41px] font-montserrat font-bold text-center mb-2 text-black w-2/3">
              Junte-se à nossa rede de solidariedade
            </Text>
            <Text className="text-xl/[24px] text-center py-4 text-black w-3/3">
              Crie sua conta e comece a fazer {"\n"}a diferença em sua {"\n"}
              comunidade.
            </Text>
          </View>

          <View className="justify-center items-center">
            <Input label="Nome" placeholder="Nome" />
            <Input
              label="E-mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input label="Senha" placeholder="Senha" secureTextEntry={true} />
            <Input
              label="Confirmar Senha"
              placeholder="Confirmar Senha"
              secureTextEntry={true}
            />
          </View>

          <View className="justify-center items-center mt-4">
            <Botao title="Registrar" titleStyle="text-lg font-medium" />
          </View>

          <View className="justify-center items-center mt-4 mb-0">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-lg">
                <Text className="text-black font-normal">Já tem conta? </Text>
                <Text className="text-salmao font-medium">Faça login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
