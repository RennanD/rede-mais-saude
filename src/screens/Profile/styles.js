import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  height: 140px;
  padding: 0 15px;
  justify-content: flex-end;
`;

export const Info = styled.View`
  height: 120px;
  padding: 0 15px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #be2223;
`;

export const Logo = styled.Image``;

export const Body = styled.View`
  flex: 1;
  padding: 15px;
  margin-top: 15px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #777;
  margin-top: 10px;
`;

export const Content = styled.Text`
  font-size: 20px;
  color: #be2223;
`;

export const Footer = styled.View`
  padding: 30px 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #be2223;
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
