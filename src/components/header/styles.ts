import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const Container = styled.View`
  background:${COLORS.darkBlue};
  height: 100px;
  width:100%;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
  align-items:center;
  justify-content:center;
  flex-direction:row;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
  paddingLeft: 10px;
  display:${props=>props.hasGoBack?'flex':'none'};
`;
export const ImageContainer = styled.View`
  flex: 2;
  alignContent: flex-start;
  justifyContent: flex-start;
  align-items:${props=>props.hasGoBack?'flex-start':'center'};
`;