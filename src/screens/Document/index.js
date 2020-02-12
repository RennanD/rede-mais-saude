import React, { useEffect } from "react";
import { ScreenOrientation } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Switcher,
  DocumentView,
  CardFront,
  Name,
  Avatar,
  Icon,
  TextButton,
  GoBackButton
} from "./styles";

import cardFront from "../../../assets/images/documents/carteirinha-frente.png";

export default function Document({ navigation }) {
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
        <Avatar
          source={{
            uri: "https://avatars3.githubusercontent.com/u/15038553?s=460&v=4"
          }}
        />
        <Switcher>
          <MaterialCommunityIcons
            name="account-convert"
            size={36}
            color="#fff"
          />
        </Switcher>
      </Header>
      <DocumentView>
        <CardFront source={cardFront}>
          <Name>RENNAN DOUGLAS</Name>
        </CardFront>
        <GoBackButton onPress={() => navigation.goBack()}>
          <TextButton>Voltar</TextButton>
        </GoBackButton>
      </DocumentView>
    </Container>
  );
}

Document.navigationOptions = {
  headerTransparent: true,
  headerLeft: false
};
