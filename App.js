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
import { StackNavigator } from "react-navigation";

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
  render() {
    const pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pear_DS.jpg/220px-Pear_DS.jpg"
    };
    return (
      <View style={styles.container}>
        <Button
          title="DETAILS"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Text>!Hello Werld¡</Text>
        <Text>🍕</Text>
        <Image source={pic} style={{ width: 250, height: 150 }} />
        <Button onPress={this.pressButton} title="star wars api...Luke" />
        <ScrollView>
          <Text style={{ fontSize: 96 }}>Scroll me plz: 🍕</Text>
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
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="HOME"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Details"
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
