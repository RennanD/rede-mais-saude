import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Header = styled.View`
  height: 100%;
  background: #be2223;
  width: 120px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Switcher = styled.TouchableOpacity`
  padding: 15px;
`;

export const DocumentView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CardFront = styled.ImageBackground`
  justify-content: flex-end;
  padding: 20px;
  height: 310px;
  width: 461px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 70px 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Icon = styled.Image``;

export const GoBackButton = styled.TouchableOpacity`
  width: 50%;
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
