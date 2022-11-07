import React from "react";
import { StatsProgressBar } from "../../../../components/statsBar";
import { Container, ContainerBar, TextStatsValue,TextStatsTitle } from "./styles";

interface StatsInfoLineProps{
  title:string;
  value?:number;
  total?:boolean;
}

export default function StatsInfoLine({title,value,total}:StatsInfoLineProps) {
  return (
    <Container>
      <TextStatsTitle>{title}</TextStatsTitle>
      <ContainerBar>
        <TextStatsValue>{value}</TextStatsValue>
        <StatsProgressBar value={value?value:0} total={total}/>
      </ContainerBar>
    </Container>
  )
}