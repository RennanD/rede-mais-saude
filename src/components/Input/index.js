import React, { forwardRef } from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, TInput, Label } from "./styles";

function Input({ style, icon, label, ...rest }, ref) {
  return (
    <>
      <Label>{label}</Label>
      <Container style={style}>
        {icon && <MaterialIcons name={icon} color="#be2223" size={20} />}
        <TInput {...rest} ref={ref} />
      </Container>
    </>
  );
}

export default forwardRef(Input);
