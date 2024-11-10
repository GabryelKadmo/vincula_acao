import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/input";
import Botao from "../../components/button/button";
import Header from "../../components/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoTitleLogin from "./assets/LoginLogoTitle.svg";
import { Image } from "expo-image";

export default function Login() {
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    console.log("Recuperar senha clicado");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }} className="bg-white flex-1">
        <View className="flex-1 bg-white">
          <Header />
          <View className="pt-6 justify-center items-center">
            <Image
              source={LogoTitleLogin}
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 350 / 140,
              }}
              resizeMode="contain"
            />
          </View>

          <View className="flex-1 justify-center items-center">
            <Text className="text-4xl font-montserrat font-bold mb-2">
              Bem-vindo
            </Text>
            <Text className="text-4xl font-montserrat font-bold">
              de volta!
            </Text>
            <Text className="text-xl/[24px] text-center text-black py-4 mb-4 w-full">
              Vamos juntos transformar vidas.
              {"\n"} Entre para continuar {"\n"}
              conectando solidariedade.
            </Text>
          </View>

          <View className="justify-center items-center">
            <Input
              label="E-mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input label="Senha" placeholder="Senha" secureTextEntry={true} />
            <View className="flex-row w-full justify-end">
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text className="text-lg text-black">Recuperar senha</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="justify-center items-center mt-5">
            <Botao
              title="Login"
              titleStyle="text-lg font-medium"
              buttonStyle="bg-salmao "
              onPress={() => navigation.navigate("Instituition")}
            />
          </View>

          <View className="justify-center items-center mt-4 mb-10">
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-lg">
                <Text className="text-black font-normal">Novo por aqui? </Text>
                <Text className="text-salmao font-medium">
                  Cadastre-se agora
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
