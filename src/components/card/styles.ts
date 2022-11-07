import styled from "styled-components/native";

export const Container = styled.View`
  background: ${props=>props.color};
  height:189px;
  width: 140px;
  border-radius:15px;
  justify-content:center;
  align-items:center;
  margin:10px;
`;
export const Name = styled.Text`
  font-size:18px;
  color:${props=>props.isDark? '#000':'#FFF'};
  font-weight:bold;
  margin-top:7px;
  margin-bottom:7px;
  font-family:Inter-bold;
`
