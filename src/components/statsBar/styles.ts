import styled from 'styled-components/native';
import { COLORS } from '../../constants';

export const Container = styled.View`
  height:7px;
  flex:1;
`;
export const Background=styled.View`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  background: ${COLORS.backgroundProgress};
  width: 100%;
`;
export const Progress=styled.View`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  background: ${({total,value})=>total?COLORS.greenlime:value>=50?COLORS.rectangleGreen:COLORS.red};
  width: ${props=>props.value>100 ?(props.value/10):props.value}%;
`;