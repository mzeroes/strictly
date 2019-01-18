import React from "react";
import { Button, StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import { colors } from "./colors";
import OnboardingScreen from "./OnBoardingScreen";


class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const response = await AsyncStorage.getItem("isOnboardDone");
    console.log(response);
    if (response === "true") {
      // this.navigateToMainApp();
    }
  }

  navigateToMainApp = () => {
    this.props.navigation.navigate("Main");
  }

  render() {
    return (
      <View style={styles.container}>
        <OnboardingScreen navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default MainScreen;
