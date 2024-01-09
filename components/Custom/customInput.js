import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ placeholder, value, onChangeText, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});

export default CustomInput;
