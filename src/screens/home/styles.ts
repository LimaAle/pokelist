import styled from 'styled-components/native';
import { COLORS } from '../../constants';

export const Container= styled.View`
  align-items:center;
  flex:1;
`;

export const Title = styled.Text`
  font-size:20px;
  color:${COLORS.darkBlue};
  font-weight:bold;
  margin-top:20px;
  margin-bottom:20px;
  font-family:Inter-bold;
`;
