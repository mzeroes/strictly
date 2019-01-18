import React from "react";
import {
  Alert,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Formik } from "formik";
import { object as yupObject, string as yupString } from "yup";

import console from "./Logger";
import styles from "./styles";
import LoginForm from "./LoginForm";
import { loginFire } from "./authUsingEmail";

const LogInScreen = props => (
  <View style={styles.formikContainer}>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={
              yupObject().shape({
                email: yupString()
                  .email("Email is invalid")
                  .required("Required"),
                password: yupString()
                  .min(8, "Minimum length should be greater than 8")
                  .required("Required")
              })}
      onSubmit={(values, { setSubmitting }) => {
        Alert.alert(JSON.stringify(values, null, 4));
        console.log(JSON.stringify(values, null, 4));
        setSubmitting(true);
        loginFire(values.email, values.password)
          .then((res) => { console.info(`RESPONSE: ${res}`); })
          .catch((err) => { console.error(err); });
      }}
      render={form => LoginForm(form)}
    />
    <TouchableOpacity
      onPress={() => { props.navigation.navigate("SignUp"); }}
      style={styles.touchableButton}
    >
      <Text style={styles.linkText}>Signup</Text>
    </TouchableOpacity>
  </View>
);
export default LogInScreen;
