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

import ProfileHeader from "../../components/ProfileHeader";

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
          <Option onPress={() => navigation.navigate("Providers")}>
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
      <Logout onPress={() => navigation.navigate("Login")}>
        <Icon source={sair} />
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <ProfileHeader navigation={navigation} />,
  headerRight: () => (
    <Header>
      <TouchableOpacity>
        <Icon source={mensagem} />
      </TouchableOpacity>
    </Header>
  )
});
