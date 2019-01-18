import React from "react";
import { Button, StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import { colors } from "./colors";
import OnBoardingAnimation from "./OnBoardingAnimation";
import AnimatedBG from "./AnimatedBG";

const animationfile1 = require("./Animations/floating_cloud.json");
const animationfile2 = require("./Animations/waves.json");

const OnboardingScreen = props => (
  <View style={styles.container}>
    <Onboarding
      skipToPage={2}
      onDone={async () => {
        await AsyncStorage.setItem("isOnboardDone", "true");
        props.navigation.navigate("Main");
      }}
      pages={[
        {
          backgroundColor: colors.background,
          image: <OnBoardingAnimation
            animationfile={animationfile1}
          />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: colors.secondary,
          image: <AnimatedBG
            animationfile={animationfile2}
          />,
          title: "The Title",
          subtitle: "This is the subtitle that sumplements the title.",
        },
        {
          backgroundColor: colors.dark,
          image: <OnBoardingAnimation
            animationfile={animationfile1}
          />,
          title: "Triangle",
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default OnboardingScreen;
