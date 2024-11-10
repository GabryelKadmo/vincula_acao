import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class InputContact extends React.Component {
  state = {
    isPasswordVisible: false,
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  render() {
    const {
      value,
      onChangeText,
      inputStyle,
      labelStyle,
      placeholder,
      secureTextEntry,
      keyboardType,
    } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <View className="mb-1">
        <View className="flex-row items-center relative">
          <TextInput
            className={`h-12 border w-full border-gelo rounded-[15px] pl-5 pr-10 text-lg outline-none font-normal text-gray-700 bg-gelo  ${inputStyle}`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            keyboardType={keyboardType || "default"}
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={this.togglePasswordVisibility}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
                size={20}
                color="azulcinzento"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default InputContact;
