import { useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native'
import PokeCard from '../../components/card'
import Header from '../../components/header'
import SearchBar from '../../components/searchBar'
import { PokemonContext } from '../../context/context'
import { POKEMON_LIST} from '../../gql/pokemon'
import { PokemonData } from '../../interfaces/ipokemon'
import { Container, Title } from './styles'

export default function HomeScreen({ navigation }) {
  const { loading } = useQuery<PokemonData>(POKEMON_LIST,{onCompleted(data) {
    handleList(data)
  },})
  const { pokemonList,handlePokemonList}=useContext(PokemonContext);

  function handleList(data:PokemonData){
    handlePokemonList(data!);
  }
  return (
    <Container>
      <Header hasGoBack={false}/>
      <Title>More than 250 Pokemons for you to choose your favorite</Title>
      <SearchBar />
      {loading ?
        <ActivityIndicator testID='loading' size="large" /> :
        <View style={{maxHeight:500}}>
        <FlatList
          numColumns={2}
          data={pokemonList.pokemon_v2_pokemon}
          renderItem={({ item }) => (
            <TouchableOpacity testID='card' onPress={() => navigation.navigate('Details',{id:item.id})}>
              <PokeCard id={item.id} name={item.name} pokemon_v2_pokemontypes={item.pokemon_v2_pokemontypes} />
            </TouchableOpacity>
          )}
        />
        </View>
      }
    </Container>
  )
}