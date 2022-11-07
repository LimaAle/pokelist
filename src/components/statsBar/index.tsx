import React from "react";
import { Background, Container, Progress } from "./styles";
interface Props{
  value:number;
  total?:boolean
}
export function StatsProgressBar({value,total}:Props){
  return(
    <Container>
      <Background/>
      <Progress value={value} total={total} />
    </Container>
  );
}