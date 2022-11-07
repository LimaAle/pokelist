import React from "react";
import { Container,AvatarImage } from "./styles";

interface props{
  id:number;
  background:string;
  large?:boolean;
}
export default function PokemonAvatar({background,id,large}:props) {
  return (
    <Container background={background} large={large}>
      <AvatarImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }} />
    </Container>
  )
}