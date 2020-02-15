import styled from "styled-components/native";

export const Header = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  background: #eee;
  border-radius: 20px;
  border: 2px #eee;
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

export const SliderShow = styled.ImageBackground`
  height: 180px;
`;

export const Icon = styled.Image``;

export const Menu = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid #eee;
  height: 100px;
  width: 90px;
  margin: 10px 5px;
`;

export const Label = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-size: 12px;
  text-align: justify;
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
