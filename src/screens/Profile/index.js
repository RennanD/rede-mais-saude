import React from "react";

import {
  Container,
  Footer,
  TextButton,
  Logo,
  Label,
  Header,
  Body,
  GoBackButton,
  Content,
  Description,
  Info,
  Title,
  Name
} from "./styles";

import logo from "../../../assets/images/logo/logo-vermelho.png";

export default function Profile({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Info>
        <Title>Bem vindo(a)!</Title>
        <Name>Rennan Douglas</Name>
      </Info>
      <Body>
        <Label>Plano</Label>
        <Content>Individual</Content>

        <Label>Documentos</Label>
        <Content>RG: 1.111.111</Content>
        <Content>CPF: 000.000.000-00</Content>

        <Label>Endereço</Label>
        <Content>Rua Tal</Content>

        <Label>Bairro</Label>
        <Content>Ininga</Content>

        <Label>Cidade / Estado</Label>
        <Content>Teresina/ PI</Content>

        <Label>CEP</Label>
        <Content>64000-00</Content>
      </Body>
      <Footer>
        <Description>
          Para qualquer alteração cadastral, ligue para nossa Central de
          Atendimento no:
        </Description>
        <Description>0800</Description>
      </Footer>
      <GoBackButton onPress={() => navigation.goBack()}>
        <TextButton>Voltar</TextButton>
      </GoBackButton>
    </Container>
  );
}

Profile.navigationOptions = {
  headerTransparent: true,
  headerLeft: false
};
