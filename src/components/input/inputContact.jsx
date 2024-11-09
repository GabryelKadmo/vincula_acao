import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fontsfamily";
import Icon from "react-native-vector-icons/FontAwesome";

class inputContact extends React.Component {
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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, inputStyle]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            keyboardType={keyboardType || "default"}
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={this.togglePasswordVisibility}
              style={styles.icon}
            >
              <Icon
                name={isPasswordVisible ? "eye-slash" : "eye"}
                size={20}
                color={colors.azulcinzento}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    width: 400,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    height: 50,
    backgroundColor: colors.gelo,
    width: 400,
    borderColor: colors.gelo,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 40,
    fontSize: 18,
    fontFamily: fonts.montserrat,
    outline: "none",
    color: colors.azulcinzento,
    flex: 1,
    marginBottom: 5,
  },
  icon: {
    position: "absolute",
    right: 18,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
};

export default inputContact;
