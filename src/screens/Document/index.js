import React, { useEffect, useState } from "react";
import { ScreenOrientation } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Switcher,
  DocumentView,
  CardFront,
  Name,
  CardBack,
  CardView,
  Label,
  Span
} from "./styles";

import cardFront from "../../../assets/images/documents/carteirinha-frente.png";
import cardBack from "../../../assets/images/documents/carteirinha-verso.png";

export default function Document({ navigation }) {
  const [switcher, setSwitcher] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () =>
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
  }, []);

  return (
    <Container>
      <Header>
        <Switcher onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="window-close" size={36} color="#fff" />
        </Switcher>
        <Switcher onPress={() => setSwitcher(!switcher)}>
          <MaterialCommunityIcons name="sync" size={36} color="#fff" />
        </Switcher>
      </Header>
      <DocumentView>
        {!switcher ? (
          <CardFront source={cardFront}>
            <Name>RENNAN DOUGLAS</Name>
          </CardFront>
        ) : (
          <CardBack source={cardBack}>
            <CardView>
              <Label>BENEFICIÁRIO</Label>
              <Span>RENNAN DOUGLAS</Span>

              <Label>CPF</Label>
              <Span>000.000.000-00</Span>

              <Label>PARCEIRO</Label>
              <Span>REDE + SAÚDE</Span>
            </CardView>
            <CardView>
              <Label>DATA DE NASCIMENTO</Label>
              <Span>03/10/1996</Span>

              <Label>DATA DE INCULSÃO</Label>
              <Span>12/02/2020</Span>
            </CardView>
          </CardBack>
        )}
      </DocumentView>
    </Container>
  );
}

Document.navigationOptions = {
  headerTransparent: true,
  headerLeft: false
};
