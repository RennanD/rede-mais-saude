import styled from "styled-components/native";

import Modal from "react-native-modal";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const ItemList = styled.TouchableOpacity`
  height: 70px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #bbb;
  padding: 15px;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #be2223;
  font-weight: bold;
`;

export const GoBackButton = styled.TouchableOpacity`
  align-self: stretch;
  margin: 15px;
  height: 46px;
  border-radius: 4px;
  background: #be2223;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const ModalSelect = styled(Modal)`
  bottom: 0;
  border-radius: 4px;
  margin: 0;
  justify-content: flex-end;
`;

export const ModalContent = styled.View`
  background: #fff;
  padding: 20px;
`;
