import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Textarea extends React.Component {
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
      numberOfLines,
    } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <View className=" ">
        <View className="flex-row items-start relative">
          <TextInput
            className={`min-h-20 w-full mt-7 bg-gelo border border-gelo rounded-[15px] pl-5 pr-10 text-lg outline-none font-normal text-gray-700 ${inputStyle}`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            keyboardType={keyboardType || "default"}
            multiline={true}
            numberOfLines={numberOfLines || 4}
            textAlignVertical="top"
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={this.togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-3"
            >
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
                size={20}
                color="#5A5A5A"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default Textarea;
