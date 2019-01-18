import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import {
  TextInput
} from "react-native-paper";

import styles from "./styles";

const SignUpForm = ({
  values,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  setFieldTouched,
  handleChange,
  handleSubmit,
  setFieldValue
}) => (

  <KeyboardAvoidingView style={{ marginTop: 20 }}>
    <TextInput
      onChangeText={value => setFieldValue("name", value)}
      mode="outlined"
      value={values.name}
      label="Name"
      onBlur={() => setFieldTouched("name")}
      placeholder="john doe"
      editable={!isSubmitting}
      error={touched.name && errors.name ? errors.name : undefined}
    />
    <Text style={styles.errorText}>
      {touched.name && errors.name ? errors.name : undefined}
    </Text>
    <TextInput
      onChangeText={value => setFieldValue("email", value)}
      mode="outlined"
      keyboardType="email-address"
      value={values.email}
      label="Email"
      onBlur={() => setFieldTouched("email")}
      placeholder="john@doe.com"
      editable={!isSubmitting}
      error={touched.email && errors.email ? errors.email : undefined}
    />
    <Text style={styles.errorText}>
      {touched.email && errors.email ? errors.email : undefined}
    </Text>

    <TextInput
      onChangeText={value => setFieldValue("password", value)}
      secureTextEntry
      mode="outlined"
      value={values.password}
      label="password"
      placeholder=""
      disabled={errors.email}
      onBlur={() => setFieldTouched("password")}
      editable={!isSubmitting}
      error={touched.password && errors.password ? errors.password : undefined}
    />
    <Text style={styles.errorText}>
      {touched.password && errors.password ? errors.password : undefined}
    </Text>
    <TouchableOpacity
      style={styles.touchableButton}
      onPress={handleSubmit}
    >
      <Text style={styles.text}> Sign In </Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

export default SignUpForm;
