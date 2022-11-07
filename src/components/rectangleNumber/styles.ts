import styled from "styled-components/native";
import { COLORS } from "../../constants";

export const Container= styled.View`
  background:${COLORS.numberYellow};
  height:17px;
  width:49px;
  border-radius:10px;
  justify-content:center;
  align-items:center;

  position:${props=>props.isTop?'absolute':'relative'};
  top:${props=>props.isTop?'-8.5px':'0px'};
`;
export const Text= styled.Text`
  color:${COLORS.darkBlue};
  font-family:Inter;
`;