import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import { colors, papertheme } from "./colors";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import MainScreen from "./MainScreen";

const SignupStack = createStackNavigator({
  SignUp: SignUpScreen,
  VerifyEmail: SignUpScreen
}, {
  defaultNavigationOptions: {
    header: null
  },
  initialRouteName: "SignUp"
});

const AuthNav = createStackNavigator({
  LogIn: LogInScreen,
  SignUp: SignupStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    header: null
  }),
  initialRouteName: "LogIn"
});

const MainNav = createSwitchNavigator({
  OnBoarding: MainScreen,
  Main: AuthNav,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    header: null
  }),
  initialRouteName: "OnBoarding"
});

const MainApp = createAppContainer(MainNav);

const App = props => (
  <PaperProvider theme={papertheme}>
    <StatusBar backgroundColor={colors.grey} barStyle="dark-content" />
    <MainApp />
  </PaperProvider>
);

export default App;
