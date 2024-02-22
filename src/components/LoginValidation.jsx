import React, { useState } from "react";

const LoginValidation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (values.email.length < 5) {
    errors.email = "Email must be more than 5 characters";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 characters";
  }

  return errors;
};

export default LoginValidation;
