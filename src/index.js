/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Animated,
  ActivityIndicator,
  Easing,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";

import Button from "./utils/button";
import Data from "./data/index";

import Picker from "react-native-picker";
import SwitchSelector from "react-native-switch-selector";
import Animation from "lottie-react-native";

export default class Apps extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      RoadSection: "選擇路段",
      SoonerOrLater: [{ label: "早餐類", value: "早餐類" }, { label: "午、晚餐類", value: "午、晚餐類" }],
      SoonerOrLaterType: "早餐類",
      RandomFoodResult: null,
      progress: new Animated.Value(0),
      Animatedfinished: true
    };
  }

  _onRandomFood(FoodTimeType) {
    const SoonerOrLaterTypes = FoodTimeType == "早餐類" ? Data.Longtan[0].breakfase : Data.Longtan[1].dinner;
    this.state.progress.setValue(0);
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start(o => {
      if (o.finished) {
        //this._Animated();
      }
    });

    this.setState({
      RandomFoodResult: this.randomItem(SoonerOrLaterTypes)
    });
  }

  randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  _RanderRoadSectionList = () => (
    <FlatList
      style={{ marginTop: 10 }}
      data={Data.RoadSection}
      keyExtractor={item => item}
      renderItem={(item, index) => {
        return (
          <TouchableOpacity
            style={styles.FlatListItemButton}
            onPress={() => {
              this.setState({
                RoadSection: item.item
              });
            }}
          >
            <Text style={{ fontSize: 20 }}>{item.item}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.containerItem]}>
          <Text style={styles.TitleText}>今天吃什麼？</Text>
          <SwitchSelector
            options={this.state.SoonerOrLater}
            initial={0}
            buttonColor="#2897ff"
            backgroundColor="#f3f3f7"
            hasPadding={true}
            onPress={value => {
              this.setState({ SoonerOrLaterType: value });
            }}
          />
          {this._RanderRoadSectionList()}
        </View>
        <Text style={{ fontSize: 20 }}>{this.state.RoadSection}</Text>
        <Text style={{ fontSize: 25 }}>
          {this.state.RandomFoodResult === null ? " " : "今天吃 " + this.state.RandomFoodResult}
        </Text>
        <Button text="抽一個" onPress={this._onRandomFood.bind(this, this.state.SoonerOrLaterType)} />
      </View>
    );
  }
}

// <Animation
// style={styles.LoadingIcon}
// source={require("./image/loading.json")}
// progress={this.state.progress}
// />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 20 : 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerItem: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  LoadingIcon: {
    width: 100,
    height: 100
  },
  TitleText: {
    fontSize: 25,
    marginBottom: 10
  },
  FlatListItemButton: {
    width: 200,
    height: 50,
    marginBottom: 3,
    backgroundColor: "#f3f3f7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  }
});
