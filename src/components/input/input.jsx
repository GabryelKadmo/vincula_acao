import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Input extends React.Component {
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
      placeholder,
      secureTextEntry,
      keyboardType,
    } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <View className="w-full mb-4">
        <View className="flex-row items-center relative w-full">
          <TextInput
            className={`h-12 bg-gelo border border-gray-100 rounded-full pl-5 pr-10 text-lg font-normal text-gray-700 flex-1 mb-1.5 ${inputStyle}`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            keyboardType={keyboardType || "default"}
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={this.togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-3"
            >
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Input;
