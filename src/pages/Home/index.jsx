import React from 'react'
import { Text, View, Image } from 'react-native'
import "../../styles/global.css";
import Botao from '../../components/button/button'

function Index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Image
        source={require('../../assets/coracao-big.png')}
      />
      <Text className='font-bold text-5xl/[49px] text-center text-black'>Conecte-se a<br></br>Quem Precisa<br></br>de Você</Text>
      <Text className='font-regular text-center text-xl/[24px] mt-6'>Encontre instituições locais<br></br>que precisam da sua ajuda.<br></br>Doe e faça a diferença!</Text>
      <Botao
        title="Registrar"
        titleStyle={{ fontSize: 18, fontWeight: 'medium' }}
        buttonStyle={{ backgroundColor: '#F73859', padding: 24 }}
      />
      <Botao
        title="Entrar"
        titleStyle={{ fontSize: 18, fontWeight: 'medium' }}
        buttonStyle={{ backgroundColor: '#283149', padding: 24 }}
      />
    </View>
  )
}

export default Index