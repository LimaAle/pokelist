import styled from "styled-components/native";

export const Container=styled.View`
  background:${props=>props.color};
  flex-direction:row;
  height:${props=>props.large?'25px':'20px'};
  border-radius:20px;
  justify-content:center;
  align-items:center;
  margin-bottom: 18px;
  margin-right:3px;
  
`;
export const ContentText=styled.Text`
  font-weight:${props=>props.isBold?'bold':'normal'};
  padding-left:${props=>props.large?'10px':'5px'};
  padding-right:${props=>props.large?'10px':'5px'};
  color:${props=>props.isDark ? '#000':'#fff'};
  font-size:${props=>props.large?'16px':'14px'};
  font-family:Inter;
`;