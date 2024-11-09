import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Index from './src/pages/Home/index';

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}
