import React, { useRef } from "react";

import {
  Container,
  Form,
  Background,
  Logo,
  FormInput,
  SubmitButton,
  Link,
  LinkText
} from "./styles";

import background from "../../../assets/images/background-login.jpg";
import logo from "../../../assets/images/logo/logo-vermelho.png";

export default function Login() {
  const passwordRef = useRef();

  return (
    <Background source={background}>
      <Container>
        <Logo source={logo} />
        <Form>
          <FormInput
            label="CPF"
            icon="person-outline"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Digite seu CPF"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            label="Senha"
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureTextEntry
            ref={passwordRef}
          />
          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
          <Link onPress={() => {}}>
            <LinkText>Esqueci minha senha</LinkText>
          </Link>
        </Form>
      </Container>
    </Background>
  );
}
