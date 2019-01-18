/* eslint-disable import/prefer-default-export */
import { DefaultTheme } from "react-native-paper";

const DARK_MODE = false;

const TINT_COLOR = DARK_MODE ? "#4a5353" : "#6f8ca9";

const lightcolors = {
  primary: "#6f8ca9",
  accent: "#EAEB5E",
  background: "#F2F2F2",
  darkBG: "#0000ff",
  lightBG: "#F2F2F2",
  text: "#4a5353",
  textDark: "#4a5353",
  textLight: "#F2F2F2",
  surface: "#F2F2F2",
  disabled: "#242b2b",
  placeholder: "#aaaaaa",
  backdrop: "#242b2b",
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  statusbar: "#F2F2F2",
  secondary: "#242b2b",
  headingtext: "#6f8ca9",
  infoText: "#6f8ca9",
  link: "#242b2b",
  highlightedText: "#242b2b",
  theme: "#EAEB5E",
  white: "#EFEFEF",
  black: "#060B10",
  dark: "#171C1F",
  grey: "#E2E2E2",
  lightgrey: "#F2F2F2",
  overlay: "#242b2b",
  red: "#ee5f5b",
  blue: "#19b5fe",
  green: "#00ff0d",
  yellow: "#F8B106",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: TINT_COLOR,
  noticeText: "#fff"
};

const darkcolors = {
  primary: "#6f8ca9",
  accent: "#EAEB5E",
  background: "#F2F2F2",
  text: "#F2F2F2",
  surface: "#F2F2F2",
  disabled: "#242b2b",
  placeholder: "#aaaaaa",
  backdrop: "#F2F2F2",
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  statusbar: "#F2F2F2",
  secondary: "#242b2b",
  headingtext: "#6f8ca9",
  infoText: "#6f8ca9",
  link: "#242b2b",
  highlightedText: "#242b2b",
  theme: "#EAEB5E",
  white: "#EFEFEF",
  black: "#060B10",
  dark: "#171C1F",
  grey: "#E2E2E2",
  lightgrey: "#F2F2F2",
  overlay: "#242b2b",
  red: "#ee5f5b",
  blue: "#19b5fe",
  green: "#00ff0d",
  yellow: "#F8B106",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeBackground: TINT_COLOR,
  noticeText: "#fff"
};

export const colors = DARK_MODE ? darkcolors : lightcolors;

export const papertheme = {
  ...DefaultTheme,
  roundness: 4,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: colors.backdrop
  }
};
