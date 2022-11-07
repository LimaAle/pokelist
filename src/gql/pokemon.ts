import { gql } from '@apollo/client'

export const POKEMON_BY_ID = gql`
  query Pokemon_info($id:Int) {
    pokemon_v2_pokemon(limit: 1, where: {id: {_eq: $id}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonstats_aggregate {
        aggregate {
          sum {
            base_stat
          }
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
          flavor_text
        }
      }
    }
  } 
`
export const POKEMON_LIST = gql`
  query Pokemon_list {
    pokemon_v2_pokemon(limit: 100) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  } 
`
export const POKEMON_LIST_BY_NAME = gql`
  query Pokemon_list($name:String) {
    pokemon_v2_pokemon( where: {name: {_iregex: $name}}) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  } 
`