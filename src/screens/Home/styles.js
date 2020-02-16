import styled from "styled-components/native";

import Swiper from "react-native-swiper";

export const Header = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
`;

export const HeadImage = styled.ImageBackground`
  height: 250px;
  justify-content: flex-end;
  padding: 20px;
`;

export const Profile = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;

export const Container = styled.View`
  flex: 1;
  background: #be2223;
`;

export const SliderShow = styled(Swiper)`
  height: 180px;
  background: #fff;
`;

export const HeadText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const HeadLabel = styled.Text`
  color: #be2223;
  font-size: 16px;
`;

export const Icon = styled.Image`
  margin: 5px;
`;

export const IconView = styled.View`
  border: 2px solid #eee;
  border-radius: 4px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.View`
  flex: 1;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  height: 80px;
  width: 80px;
  margin: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-size: 12px;
`;

export const Logout = styled.TouchableOpacity`
  height: 40px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoutText = styled.Text`
  margin-left: 10px;
  color: #9b0103;
  font-size: 14px;
  font-weight: bold;
`;
