import React from "react";

import { TouchableOpacity, View } from "react-native";

import {
  Container,
  SliderShow,
  Row,
  Option,
  Menu,
  Label,
  Icon,
  Logout,
  LogoutText,
  Avatar,
  Header,
  Profile
} from "./styles";

import head from "../../../assets/images/banner-promoções.jpg";

import sair from "../../../assets/images/icons/sair.png";

import credenciados from "../../../assets/images/icons/credenciados.png";
import carteirinha from "../../../assets/images/icons/carteirinha.png";
import manuais from "../../../assets/images/icons/manuais.png";
import noticias from "../../../assets/images/icons/noticias.png";
import prescricoes from "../../../assets/images/icons/prescricoes.png";
import contatos from "../../../assets/images/icons/contatos.png";
import mensagem from "../../../assets/images/icons/mensagem.png";

export default function Home({ navigation }) {
  return (
    <Container>
      <SliderShow source={head} />
      <Menu>
        <Row>
          <Option>
            <Icon source={credenciados} />
            <Label>Redes credenciadas</Label>
          </Option>

          <Option onPress={() => navigation.navigate("Document")}>
            <Icon source={carteirinha} />
            <Label>Carteirinha virtual</Label>
          </Option>

          <Option>
            <Icon source={manuais} />
            <Label>Manuais e Documentos</Label>
          </Option>
        </Row>

        <Row>
          <Option>
            <Icon source={noticias} />
            <Label>Notícias</Label>
          </Option>

          <Option>
            <Icon source={prescricoes} />
            <Label>Prescrições</Label>
          </Option>

          <Option>
            <Icon source={contatos} />
            <Label>Contatos</Label>
          </Option>
        </Row>
      </Menu>
      <Logout>
        <Icon source={sair} />
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <Header>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Avatar
          source={{
            uri: "https://avatars3.githubusercontent.com/u/15038553?s=460&v=4"
          }}
        />
      </TouchableOpacity>
      <View>
        <Profile>Olá,</Profile>
        <Profile>Rennan Douglas</Profile>
      </View>
    </Header>
  ),
  headerRight: () => (
    <Header>
      <TouchableOpacity>
        <Icon source={mensagem} />
      </TouchableOpacity>
    </Header>
  )
});
