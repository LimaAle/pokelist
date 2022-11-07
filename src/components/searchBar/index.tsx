import { useLazyQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { PokemonContext } from "../../context/context";
import { POKEMON_LIST_BY_NAME } from "../../gql/pokemon";
import { PokemonData } from '../../interfaces/ipokemon';
import { SearchInput, Container, SearchIcon, ArrowButton } from "./styles";

export default function SearchBar() {
  const { name, changeText,handlePokemonList } = useContext(PokemonContext);
  const [getPokemon]= useLazyQuery<PokemonData>(POKEMON_LIST_BY_NAME,{onCompleted(data) {
    handlePokemonList(data)
  },});

  return (
    <Container>
      <SearchIcon name='search' size={26} />
      <SearchInput placeholder={'Search Pokémon'} onChangeText={changeText} value={name} autoCapitalize='none' />
      <TouchableOpacity onPress={()=>getPokemon({variables:{name}})}>
        <ArrowButton name='arrow-forward-circle-sharp' size={28} />
      </TouchableOpacity>
    </Container>
  );
}