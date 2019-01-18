import React from "react";

import { StyleSheet } from "react-native";
import { colors } from "./colors";

const ROUNDNESS = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  rootContainer: {
    backgroundColor: colors.background,
  },
  formikContainer: {
    flex: 1,
    marginTop: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 14,
    marginTop: 6,
    color: colors.text
  },
  errorText: {
    fontSize: 14,
    margin: 6,
    alignSelf: "flex-end",
    color: colors.red
  },
  textInput: {
    color: colors.tintColor,
    height: 36,
    width: "100%",
    borderColor: colors.tintColor,
    borderWidth: 1,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: ROUNDNESS,
  },
  touchableButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: ROUNDNESS,
    padding: 12,
    marginTop: 20
  },
  contentContainer: {
    paddingTop: 30
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  baseContainer: {
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  highlightText: {
    color: colors.highlightedText
  },
  headingText: {
    fontSize: 17,
    color: colors.headingtext,
    lineHeight: 24,
    textAlign: "left"
  },
  infoContainer: {
    backgroundColor: colors.warningBackground,
    alignItems: "center",
    padding: 10,
    marginTop: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: colors.infoText,
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  linkLoginSignup: {
    color: colors.white,
    alignItems: "center",
    backgroundColor: colors.grey,
    padding: 12,
    width: "100%",
  },
  linkText: {
    fontSize: 14,
    color: colors.link
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: colors.grey,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.black
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  },
  content: {
    padding: 16,
  }
});

export default styles;
