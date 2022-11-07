import styled from "styled-components/native";
import { COLORS } from "../../../../constants";

export const Container= styled.View`
  flex-direction:row;
  width:100%;
  justify-content:space-between;
  margin-bottom:8px;
`;
export const ContainerBar=styled.View`
  flex-direction:row;
  align-items:center;
  width:160px;
`;
export const TextStatsValue=styled.Text`
  font-family:Inter;
  color:${COLORS.darkBlue};
  margin-right:8px;
`;
export const TextStatsTitle=styled(TextStatsValue)`
  font-family:Inter-medium;
`;