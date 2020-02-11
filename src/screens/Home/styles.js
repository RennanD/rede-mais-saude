import styled from "styled-components/native";

export const Header = styled.View`
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 2px solid #eee;
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
  flex: 1;
`;

export const Icon = styled.Image``;

export const Menu = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  width: 120px;
  margin: 10px 5px;
`;

export const Label = styled.Text`
  color: #fff;
  margin-top: 7px;
  font-size: 14px;
`;

export const Logout = styled.TouchableOpacity`
  height: 60px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoutText = styled.Text`
  margin-left: 10px;
  color: #9b0103;
  font-size: 16px;
  font-weight: bold;
`;
