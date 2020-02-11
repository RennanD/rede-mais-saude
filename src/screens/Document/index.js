import React, { useEffect } from "react";
import { ScreenOrientation } from "expo";
import { Text } from "react-native";

import { Container } from "./styles";

export default function Document({ navigation }) {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () =>
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  return (
    <Container onPress={() => navigation.navigate("Home")}>
      <Text>oi</Text>
    </Container>
  );
}
