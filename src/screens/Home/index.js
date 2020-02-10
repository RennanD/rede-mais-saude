import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, SliderShow, Row, Option, Menu, Label } from "./styles";

import head from "../../../assets/images/banner-promoções.jpg";

export default function Home() {
  return (
    <Container>
      <SliderShow source={head} />
      <Menu>
        <Row>
          <Option>
            <MaterialCommunityIcons name="google-maps" size={28} color="#fff" />
            <Label>Redes credenciadas</Label>
          </Option>
          <Option>
            <MaterialCommunityIcons
              name="account-card-details"
              size={28}
              color="#fff"
            />
            <Label>Carteirinha virtual</Label>
          </Option>
        </Row>
        <Row>
          <Option>
            <MaterialCommunityIcons name="google-maps" size={28} color="#fff" />
            <Label>Redes credenciadas</Label>
          </Option>
          <Option>
            <MaterialCommunityIcons
              name="account-card-details"
              size={28}
              color="#fff"
            />
            <Label>Carteirinha virtual</Label>
          </Option>
        </Row>
      </Menu>
      <Logout>
        <Icon />
        <LogoutText></LogoutText>
      </Logout>
    </Container>
  );
}
