import React, { createContext, useState } from "react";
import { PokemonData } from '../interfaces/ipokemon'



interface contextprops {
  name: string;
  changeText: (value: string) => void;
  handlePokemonList: (value: PokemonData) => void;
  pokemonList: PokemonData;
}
export const PokemonContext = createContext<contextprops>({
  name: '', changeText: (value: string) => { }, handlePokemonList: (value: PokemonData) => { },
  pokemonList: { pokemon_v2_pokemon: [{ id: 0, name: '', pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: '' } }] }] }
}
);
export default function ContextProvider({ children }) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonList, setPokemonList] = useState<PokemonData>({ pokemon_v2_pokemon: [{ id: 0, name: '', pokemon_v2_pokemontypes: [{ pokemon_v2_type: { name: '' } }] }] });

  function handlePokemonList(value: PokemonData) {
    setPokemonList(value);
  }

  function changeText(value: string) {
    setPokemonName(value);
  }
  return (
    <PokemonContext.Provider value={{ name: pokemonName, changeText, handlePokemonList, pokemonList }}>
      {children}
    </PokemonContext.Provider>
  )
}
