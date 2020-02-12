import React, { useState } from "react";

import {
  Container,
  ItemList,
  Label,
  Content,
  TextButton,
  GoBackButton,
  ModalSelect,
  ModalContent
} from "./styles";

export default function SearchProviders() {
  const [isVisible, setVisible] = useState(false);

  return (
    <Container>
      <Content>
        <ItemList onPress={() => setVisible(!isVisible)}>
          <Label>Plano</Label>
        </ItemList>

        <ItemList>
          <Label>Região da busca</Label>
        </ItemList>

        <ItemList>
          <Label>Tipo de prestador</Label>
        </ItemList>

        <ItemList>
          <Label>Especialidade</Label>
        </ItemList>

        <ItemList>
          <Label>Nome do Prestador - Opcional</Label>
        </ItemList>
      </Content>

      <GoBackButton onPress={() => {}}>
        <TextButton>Pesquisar</TextButton>
      </GoBackButton>

      <ModalSelect isVisible={isVisible}>
        <ModalContent onBackdropPress={() => setVisible(!isVisible)}>
          <ItemList onPress={() => {}}>
            <Label>REDE MAIS SAÚDE</Label>
          </ItemList>
          <GoBackButton onPress={() => setVisible(!isVisible)}>
            <TextButton>Cancelar</TextButton>
          </GoBackButton>
        </ModalContent>
      </ModalSelect>
    </Container>
  );
}

SearchProviders.navigationOptions = {
  title: "Buscar"
};
