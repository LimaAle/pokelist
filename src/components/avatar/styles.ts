import styled from "styled-components/native";

export const Container = styled.View`
  background:${props=>props.background};
  height:${props=>props.large?'150px':'109px'};
  width:${props=>props.large?'150px':'109px'};
  border-radius:${props=>props.large?'75px':'54px'};
  margin:20px 15px 0 16px;
  align-items:center;
  justify-content:center;
`;
export const AvatarImage = styled.Image`
  height:96px;
  width:96px;
`;