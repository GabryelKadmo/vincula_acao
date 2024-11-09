import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Input from "../../components/input/input";
import Botao from "../../components/button/button";
import { colors } from "../../styles/colors";

export default function Login() {
  const handleForgotPassword = () => {
    console.log("Recuperar senha clicado");
  };

  return (
    <View className="flex-1">
      <View className="pt-6 justify-center items-center">
        <Text className="text-8xl font-thin">Vincula</Text>
        <View className="flex-row items-center mt-4">
          <Image
            source={require("../../assets/Logo.svg")}
            style={{ width: 100, height: 100, marginRight: 20 }}
          />
          <Text className="text-8xl font-thin">Ação</Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center">
        <Text className="text-4xl font-montserrat font-bold mb-6">Bem-vindo de volta!</Text>
        <Text className="text-xl text-center px-4">
          Vamos juntos transformar vidas. Entre para continuar conectando
          solidariedade.
        </Text>
      </View>

      <View className="justify-center items-center">
        <View className="justify-center items-end">
          <Input
            label="E-mail"
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <Input label="Senha" placeholder="Senha" secureTextEntry={true} />

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-lg">Recuperar senha</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="justify-center items-center">
        <Botao
          title="Entrar"
          titleStyle={{ fontSize: 18, fontWeight: "medium" }}
          buttonStyle={{ backgroundColor: colors.salmao, padding: 24 }}
        />
      </View>

      <View className="justify-center items-center mt-4 mb-10">
        <TouchableOpacity>
          <Text className="text-lg">
            <Text style={{ color: "black", fontWeight: "400" }}>
              Novo por aqui?{" "}
            </Text>
            <Text style={{ color: colors.salmao, fontWeight: "500" }}>
              Cadastre-se agora
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
