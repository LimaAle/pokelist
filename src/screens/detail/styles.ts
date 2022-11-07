import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../constants';

export const Container= styled.View`
  align-items:center;
  background-color:${COLORS.backgroundGrey};
  margin:16px;
  margin-top:0;
  border-bottom-left-radius:16px;
  border-bottom-right-radius:16px;
  padding:16px;
`;
export const TopContent=styled.View`
  background-color:${props=>props.color};
  height:150px;
  margin:16px;
  margin-bottom:0;
  border-top-left-radius:16px;
  border-top-right-radius:16px;
  z-index:1;
`;
export const TopContainer=styled.View`
  justifyContent: center; 
  marginLeft: 10px;
`;
export const Description=styled.Text`
  color:${COLORS.darkBlue};
  font-size:18px;
  margin-top:24px;
  margin-bottom:16px;
  text-align:center;
  font-family:Inter;
`;
export const InfoContainer=styled.View`
  flex-direction:row;
  width:100%;
  justify-content:space-evenly;
`;
export const InfoContainerColumn=styled.View`
  align-items:center;
`;
export const MinorText= styled.Text`
  color:${COLORS.blue};
  font-size:14px;
`;
export const MaleIcon= styled(Ionicons)`
  color:${COLORS.maleGender};
`;
export const FemaleIcon= styled(Ionicons)`
  color:${COLORS.femaleGender};
`;
export const PokemonName=styled.Text`
  color:${props=>props.isDark?'#000':'#fff'};
  font-weight:bold;
  font-size:22px;
  margin-top:8px;
  margin-bottom:8px;
`;
export const GenderContainer=styled.View`
  flex-direction:row;
  justify-content:space-between;
  width:100%;
  margin-bottom:5px;
`;
export const GenderText=styled.Text`
  font-family:Inter-medium;
  color:${COLORS.darkBlue};
`;
export const GenderTitle=styled.Text`
  font-family:Inter-medium;
  color:${COLORS.darkBlue};
  flex:1;
`;
export const GenderValue=styled.View`
  flex-direction:row;
`;
export const GenderValueContainer=styled.View`
  flexDirection:row;
  flex:1;
  justify-content:space-between;
`;