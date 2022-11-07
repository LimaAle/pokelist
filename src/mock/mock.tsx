import { POKEMON_BY_ID } from "../gql/pokemon";

export const mocks = [
  {
    request: {
      query: POKEMON_BY_ID,
      variables: {
        id: 1
      }
    },
    result: {
      data: {
       
      pokemon_v2_pokemon: [
        {
          id: 1,
          name: "bulbasaur",
          height: 7,
          weight: 69,
          pokemon_v2_pokemonstats_aggregate: {
            aggregate: {
              sum: {
                base_stat: 318
              }
            }
          },
          pokemon_v2_pokemontypes: [
            {
              pokemon_v2_type: {
                name: "grass"
              }
            },
            {
              pokemon_v2_type: {
                name: "poison"
              }
            }
          ],
          pokemon_v2_pokemonstats: [
            {
              base_stat: 45,
              pokemon_v2_stat: {
                name: "hp"
              }
            },
            {
              base_stat: 49,
              pokemon_v2_stat: {
                name: "attack"
              }
            },
            {
              base_stat: 49,
              pokemon_v2_stat: {
                name: "defense"
              }
            },
            {
              base_stat: 65,
              pokemon_v2_stat: {
                name: "special-attack"
              }
            },
            {
              base_stat: 65,
              pokemon_v2_stat: {
                name: "special-defense"
              }
            },
            {
              base_stat: 45,
              pokemon_v2_stat: {
                name: "speed"
              }
            }
          ],
          pokemon_v2_pokemonspecy: {
            pokemon_v2_pokemonspeciesflavortexts: [
              {
                flavor_text: "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
              }
            ]
          }
        }
      ]
      }
    }
  }
];