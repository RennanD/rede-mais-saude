import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background: #191920;
`;

export const Header = styled.View`
  height: 100%;
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
  margin-left: 70px;
  justify-content: center;
`;

export const CardFront = styled.ImageBackground`
  justify-content: flex-end;
  padding: 20px;
  height: 300px;
  width: 477px;
`;

export const CardBack = styled.ImageBackground`
  padding: 20px;
  height: 300px;
  width: 477px;
  flex-direction: row;
`;

export const CardView = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  margin: 30px 0;
`;

export const Label = styled.Text`
  color: #be2223;
  font-size: 13px;
`;

export const Span = styled.Text`
  color: #333;
  font-size: 15px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 50px 20px;
`;

export const Icon = styled.Image``;
