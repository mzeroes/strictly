import React from "react";
import {
  View,
} from "react-native";

import { Formik } from "formik";
import { object as yupObject, string as yupString } from "yup";

import console from "./Logger";
import styles from "./styles";
import { loginFire, signupFire } from "./authUsingEmail";
import SignUpForm from "./SignUpForm";

const SignUpScreen = props => (
  <View style={styles.formikContainer}>
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={
          yupObject().shape({
            name: yupString()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Required"),
            email: yupString()
              .email("Email is invalid")
              .required("Required"),
            password: yupString()
              .min(8, "Minimum length should be greater than 8")
              .required("Required")
          })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 4));
        setSubmitting(true);
        signupFire(values.email, values.password)
          .then((res) => { console.info(`RESPONSE: ${res}`); })
          .catch((err) => { console.error(err); });
      }}
      render={form => SignUpForm(form)}
    />
  </View>
);
export default SignUpScreen;
