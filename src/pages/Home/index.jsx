import React from "react";
import { Text, View, ScrollView } from "react-native";
import "../../styles/global.css";
import Botao from "../../components/button/button";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoHome from "../../assets/Logo.svg";
import { Image } from "expo-image";
function Home({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center">
          <Image source={LogoHome} style={{ width: 300, height: 300 }} />
          <Text className="font-bold text-5xl/[49px] text-center text-black">
            Conecte-se a {"\n"}
            Quem Precisa
            {"\n"}
            de Você
          </Text>
          <Text className="font-regular text-center text-xl/[24px] mt-6 text-black">
            Encontre instituições locais
            {"\n"}
            que precisam da sua ajuda.
            {"\n"}
            Doe e faça a diferença!
          </Text>
          <View className="gap-8 mt-10">
            <Botao
              title="Registrar"
              titleStyle={{ fontSize: 18, fontWeight: "medium" }}
              buttonStyle="!bg-salmao"
              onPress={() => navigation.navigate("Register")}
            />
            <Botao
              title="Entrar"
              titleStyle={{ fontSize: 18, fontWeight: "medium" }}
              buttonStyle="!bg-azulescuro"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
