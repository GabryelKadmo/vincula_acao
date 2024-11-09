import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa o hook de navegação
import Input from "../../components/input/input";
import Botao from "../../components/button/button";
import { colors } from "../../styles/colors";

export default function Login() {
  const navigation = useNavigation(); // Hook de navegação

  const handleForgotPassword = () => {
    console.log("Recuperar senha clicado");
  };

  return (
    <View className="flex-1">
      <View className="pt-6 justify-center items-center">
        <Image source={require("./assets/LoginLogoTitle.svg")} />
      </View>

      <View className="flex-1 justify-center items-center">
        <Text className="text-4xl font-montserrat font-bold mb-2">
          Bem-vindo
        </Text>
        <Text className="text-4xl font-montserrat font-bold mb-6">
          de volta!
        </Text>
        <Text   style={{ color: colors.black, fontWeight: 400 }}
          className="text-xl/[24px] text-center px-4 py-4 mb-4 w-3/3">
          Vamos juntos transformar vidas.
          <br /> Entre para continuar <br />
          conectando solidariedade.
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
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
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
