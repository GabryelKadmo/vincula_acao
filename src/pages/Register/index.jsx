import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/input";
import Botao from "../../components/button/button";
import { colors } from "../../styles/colors";
import Header from "../../components/header/header";

export default function Register() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Header />
      <View className="pt-4 justify-center items-center">
        <Image source={require("./assets/RegisterLogoTitle.svg")} />
      </View>

      <View className="flex-1 justify-start items-center mt-4">
        <Text
          style={{ color: colors.black }}
          className="text-4xl/[41px] font-montserrat w-2/3 font-bold text-center mb-2"
        >
          Junte-se à nossa rede de solidariedade
        </Text>
        <Text
          style={{ color: colors.black, fontWeight: 400 }}
          className="text-xl/[24px] text-center px-4 py-4 w-3/3"
        >
          Crie sua conta e comece a fazer <br />a diferença em sua <br />
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

      <View className="justify-center items-center mt-0">
        <Botao
          title="Registrar"
          titleStyle={{ fontSize: 18, fontWeight: "medium" }}
          buttonStyle={{ backgroundColor: colors.salmao, padding: 24 }}
        />
      </View>

      <View className="justify-center items-center mt-4 mb-10">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-lg">
            <Text style={{ color: "black", fontWeight: "400" }}>
              Já tem conta?{" "}
            </Text>
            <Text style={{ color: colors.salmao, fontWeight: "500" }}>
              Faça login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
