import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Botao extends React.Component {
  render() {
    const { title, titleStyle, buttonStyle, onPress } = this.props;

    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  button: {
    marginTop: 36,
    padding: 16,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    width: 400,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
};

export default Botao;
