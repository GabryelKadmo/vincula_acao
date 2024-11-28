import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import "../../styles/global.css";
import Botao from "../../components/button/button";
import Header from "../../components/header/header";
import InputContact from "../../components/input/inputContact";
import TextArea from "../../components/textarea/textarea";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoTitleContact from "./assets/ContactImageTitle.svg";
import { Image } from "expo-image";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(!isValidEmail(text)); // Atualiza o estado com base na validação
  };
  const handleSendEmail = () => {
    if (!email || !message) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_wv24y1b",
        "template_0qej8vc",
        { user_email: email, user_message: message },
        "KIQvOEEECDSvM8WAF"
      )
      .then(() => {
        setSuccessAlert(true);
        setTimeout(() => setSuccessAlert(false), 3000);
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        Alert.alert(
          "Erro",
          `Houve um problema ao enviar a mensagem. Detalhes: ${error.text}`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <Header />
        {successAlert && (
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>
              <Text style={{ fontWeight: "bold" }}>✓ </Text>Mensagem enviada com
              sucesso!
            </Text>
          </View>
        )}
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
            Dúvidas, sugestões ou deseja se conectar? {"\n"}Estamos aqui para
            ajudar.
          </Text>
        </View>

        <View className="mb-4 justify-center items-center">
          <View className="w-full">
            <InputContact
              label="E-mail"
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={handleEmailChange}
              style={{
                borderColor: emailError ? "red" : "gray",
                borderWidth: 1,
              }}
            />
            {emailError && (
              <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
                Por favor, insira um e-mail válido.
              </Text>
            )}
            <TextArea
              label="Mensagem"
              placeholder="Deixe sua mensagem ou sugestão..."
              value={message}
              onChangeText={setMessage}
            />
          </View>
        </View>

        <View className="justify-center items-center mt-6">
          <Botao
            title={
              loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                "Enviar Mensagem"
              )
            }
            titleStyle={{ fontWeight: "medium" }}
            buttonStyle="!bg-salmao"
            onPress={handleSendEmail}
            disabled={loading}
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

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: "#DFF2BF",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  alertText: {
    color: "#4F8A10",
    fontSize: 16,
  },
});
