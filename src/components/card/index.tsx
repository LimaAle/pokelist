import React from 'react';
import { FlatList } from 'react-native';
import { PokemonV2PokemonSimple } from '../../interfaces/ipokemon';
import { captalizeText, colorsForPokemon } from '../../utils/utils';
import PokemonAvatar from '../avatar';
import RectangleInfo from '../rectangleInfo';
import RectangleNumber from '../rectangleNumber';
import { Container, Name } from './styles'

export default function PokeCard({ pokemon_v2_pokemontypes, name,id }: PokemonV2PokemonSimple) {

  let colors=colorsForPokemon(pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  

  return (
    <Container color={colors.background}>
      <RectangleNumber number={id} isTop />
      <PokemonAvatar background={colors.avatar} id={id}/>
      <Name isDark={colors.darkText}>{captalizeText(name)}</Name>
      <FlatList
        horizontal
        data={pokemon_v2_pokemontypes}
        renderItem={({ item }) => <RectangleInfo text={captalizeText(item.pokemon_v2_type.name)} color={colors.type} isDark={colors.darkText} />}
      />

    </Container>)
}