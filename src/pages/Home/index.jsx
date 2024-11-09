import React from 'react';
import { Text, View, Image } from 'react-native';
import "../../styles/global.css";
import Botao from '../../components/button/button';

function Home({ navigation }) {
  return (
    <View className='flex-1 justify-center items-center'>
      <Image source={require('../../assets/Logo.svg')} />
      <Text className='font-bold text-5xl/[49px] text-center text-black'>
        Conecte-se a<br />Quem Precisa<br />de Você
      </Text>
      <Text className='font-regular text-center text-xl/[24px] mt-6'>
        Encontre instituições locais<br />que precisam da sua ajuda.<br />Doe e faça a diferença!
      </Text>
      <Botao
        title="Registrar"
        titleStyle={{ fontSize: 18, fontWeight: 'medium' }}
        buttonStyle={{ backgroundColor: '#F73859', padding: 24 }}
        onPress={() => navigation.navigate('Register')} // Navegação para tela de registro
      />
      <Botao
        title="Entrar"
        titleStyle={{ fontSize: 18, fontWeight: 'medium' }}
        buttonStyle={{ backgroundColor: '#283149', padding: 24 }}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default Home;
