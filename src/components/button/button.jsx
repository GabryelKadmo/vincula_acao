import React from "react";
import { TouchableOpacity, Text } from "react-native";

class Botao extends React.Component {
  render() {
    const { title, titleStyle, buttonStyle, onPress } = this.props;

    return (
      <TouchableOpacity
        className={`p-3 rounded-full bg-salmao w-96 items-center justify-center ${buttonStyle}`}
        onPress={onPress}
      >
        <Text className={`text-white text-center text-base ${titleStyle}`}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Botao;
