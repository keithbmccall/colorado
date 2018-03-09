import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  Slider,
  Alert,
  Button,
  ScrollView
} from "react-native";
import axios from "axios";
import { TabNavigator } from "react-navigation";
import { ImageColorPicker } from "react-native-image-color-picker";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: "canned fruit"
    };
    this.pressButton = this.pressButton.bind(this);
  }
  pressButton() {
    axios({
      url: "https://swapi.co/api/people/1",
      method: "get"
    }).then(response => {
      console.log(response);
      this.setState({
        data: response.data
      });
    });
  }
  static navigationOptions = {
    title: "¡CHEESE!"
  };
  render() {
    const pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pear_DS.jpg/220px-Pear_DS.jpg"
    };
    return (
      <View style={styles.container}>
        <Button
          title="DETAILS"
          onPress={() =>
            this.props.navigation.navigate("Details", {
              pic: pic,
              words: "ham and cheese"
            })
          }
        />
        <Text>!Hello Werld¡</Text>
        <Text>🍕</Text>
        <Image source={pic} style={{ width: 250, height: 150 }} />
        <Button onPress={this.pressButton} title="star wars api...Luke" />
        <ScrollView>
          <Text style={{ fontSize: 96 }}>Scroll me plz:🚔 🍕</Text>
          <Text style={{ fontSize: 80 }}>React Native: 🍕</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz: 🍕</Text>
          <Text style={{ fontSize: 80 }}>React Native: 🍕</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz: 🍕</Text>
          <Text style={{ fontSize: 80 }}>React Native: 🍕</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz: 🍕</Text>
          <Text style={{ fontSize: 80 }}>React Native: 🍕</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz: 🍕</Text>
          <Text style={{ fontSize: 80 }}>React Native: 🍕</Text>
        </ScrollView>
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const pic = params ? params.pic : null;
    const words = params ? params.words : null;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Image source={pic} style={{ width: 250, height: 150 }} />
        <Text>{words}!!!!!</Text>
        <Button
          title="HOME"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
class ColorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>color page</Text>
      </View>
    );
  }
}
const RootStack = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Color: {
      screen: ColorScreen
    }
  },
  {
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "green",
      activeBackgroundColor: "black",
      inactiveBackgroundColor: "pink",
      inactiveTintColor: "yellow",
      style: {
        borderColor: "black"
      },
      labelStyle: {
        fontSize: 20
      },
      tabStyle: {
        borderColor: "black"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
