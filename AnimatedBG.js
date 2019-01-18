import React from "react";
import { StyleSheet, View } from "react-native";
import { DangerZone } from "expo";
import window from "./Layout";

const { Lottie } = DangerZone;
class AnimatedBG extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <Lottie
            ref={(animation) => { this.animation = animation; }}
            style={styles.animation}
            source={this.props.animationfile}
            loop={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
    flex: 1
  },
  animation: {
    height: 420,
    width: window.width,
  },
});

export default AnimatedBG;
