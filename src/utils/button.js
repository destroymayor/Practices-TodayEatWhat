/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default class Button extends Component<{}> {
  render() {
    const { TouchableOpacityStyle, TextStyle, onPress, text } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[TouchableOpacityStyle, styles.TouchableOpacitys]}>
        <Text style={[TextStyle, styles.TextStyles]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacitys: {
    width: 100,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f7",
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    marginBottom: 5
  },
  TextStyles: {
    color: "#222222",
    fontSize: 17
  }
});
