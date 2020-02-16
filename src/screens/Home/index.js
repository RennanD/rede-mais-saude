import React from "react";

import { useDispatch } from "react-redux";

import { TouchableOpacity, View, Image } from "react-native";

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
  Header,
  IconView,
  HeadImage,
  HeadLabel,
  HeadText
} from "./styles";

import ProfileHeader from "../../components/ProfileHeader";

import head from "../../../assets/images/promo.png";
import head2 from "../../../assets/images/welcome.png";

import sair from "../../../assets/images/icons/sair.png";

import credenciados from "../../../assets/images/icons/credenciados.png";
import carteirinha from "../../../assets/images/icons/carteirinha.png";
import manuais from "../../../assets/images/icons/manuais.png";
import noticias from "../../../assets/images/icons/noticias.png";
import prescricoes from "../../../assets/images/icons/prescricoes.png";
import contatos from "../../../assets/images/icons/contatos.png";
import mensagem from "../../../assets/images/icons/mensagem.png";
import { singOut } from "../../store/modules/user/actions";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <SliderShow autoplay>
        <HeadImage source={head}>
          <HeadText>Encontre médicos, clínicas e farmácias.</HeadText>
          <HeadLabel>
            Faça uma busca mais próxima de onde você estiver
          </HeadLabel>
        </HeadImage>
        <HeadImage source={head2}>
          <HeadText>Encontre médicos, clínicas e farmácias.</HeadText>
          <HeadLabel>
            Faça uma busca mais próxima de onde você estiver
          </HeadLabel>
        </HeadImage>
      </SliderShow>
      <Menu>
        <Row>
          <Option onPress={() => navigation.navigate("Providers")}>
            <IconView>
              <Icon source={credenciados} />
            </IconView>
            <Label>Redes credenciadas</Label>
          </Option>

          <Option onPress={() => navigation.navigate("Document")}>
            <IconView>
              <Icon source={carteirinha} />
            </IconView>
            <Label>Carteirinha virtual</Label>
          </Option>

          <Option>
            <IconView>
              <Icon source={manuais} />
            </IconView>
            <Label>Manuais e Documentos</Label>
          </Option>
        </Row>

        <Row>
          <Option>
            <IconView>
              <Icon source={noticias} />
            </IconView>
            <Label>Notícias</Label>
          </Option>

          <Option>
            <IconView>
              <Icon source={prescricoes} />
            </IconView>
            <Label>Prescrições</Label>
          </Option>

          <Option>
            <IconView>
              <Icon source={contatos} />
            </IconView>
            <Label>Contatos</Label>
          </Option>
        </Row>
      </Menu>
      <Logout onPress={() => dispatch(singOut())}>
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
