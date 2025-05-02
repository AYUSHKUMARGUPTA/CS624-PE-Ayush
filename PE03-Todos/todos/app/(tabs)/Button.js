import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.button}
      onPress={submitTodo}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#555',
  },
});

export default Button;
