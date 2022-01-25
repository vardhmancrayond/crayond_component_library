import React from "react";
import { TextField, Button, Stack } from "@mui/material";

export interface LoginFormProps {
  usernameProps?: object;
  passwordProps?: object;
  buttonProps?: object;
  buttonLabel?: string;
}

const defaultProps: LoginFormProps = {
  usernameProps: {
    id: "username",
    label: "Username",
  },
  passwordProps: {
    id: "password",
    label: "password",
    type: "password",
  },
  buttonProps: {
    variant: "outlined",
  },
  buttonLabel: "Login",
};

const LoginForm = (props: LoginFormProps) => {
  let usernameProps: object = {
    ...defaultProps.usernameProps,
    ...props.usernameProps,
  };
  let passwordProps: object = {
    ...defaultProps.passwordProps,
    ...props.passwordProps,
  };
  let buttonProps: object = {
    ...defaultProps.buttonProps,
    ...props?.buttonProps,
  };
  return (
    <Stack spacing={2}>
      <TextField {...usernameProps} />
      <TextField {...passwordProps} />
      <Button {...buttonProps}>
        {props?.buttonLabel || defaultProps?.buttonLabel}
      </Button>
    </Stack>
  );
};

export default LoginForm;
