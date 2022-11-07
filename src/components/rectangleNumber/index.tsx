import React from "react";
import { addLeadingZeros } from "../../utils/utils";
import { Container,Text } from "./styles";
interface props{
  number:number;
  isTop?:boolean|false
}
export default function RectangleNumber({number,isTop}:props){
  return(
    <Container isTop={isTop}>
      <Text>
       {addLeadingZeros(number)}
      </Text>
    </Container>
  )
}