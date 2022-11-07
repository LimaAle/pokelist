import styled from "styled-components/native";
import { COLORS } from "../../constants";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const SearchIcon=styled(EvilIcons)`
  padding-left:10px;
  padding-right:6px
  color:${COLORS.lightBlue};
`;
export const ArrowButton=styled(Ionicons)`
  padding-right:10px;
  color:${COLORS.lightBlue};
`;
export const Container = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:40px;
  margin:10px;
  border:1px solid;
  border-color:${COLORS.lightBlue};
  border-radius:20px;
`;

export const SearchInput = styled.TextInput`
  flex:1;
  height:40px;
  padding-top:10px;
  padding-right:10px;
  padding-bottom:10px;

`;