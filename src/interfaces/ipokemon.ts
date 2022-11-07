
export interface PokemonV2PokemonSimple {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonV2Pokemontypes[];
}

export interface PokemonData {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}


  export interface Sum {
      base_stat: number;
  }

  export interface Aggregate {
      sum: Sum;
  }

  export interface PokemonV2PokemonstatsAggregate {
      aggregate: Aggregate;
  }

  export interface PokemonV2Type {
      name: string;
  }

  export interface PokemonV2Pokemontypes {
      pokemon_v2_type: PokemonV2Type;
  }

  export interface PokemonV2Stat {
      name: string;
  }

  export interface PokemonV2Pokemonstats {
      base_stat: number;
      pokemon_v2_stat: PokemonV2Stat;
  }

  export interface PokemonV2Pokemonspeciesflavortexts {
      flavor_text: string;
  }

  export interface PokemonV2Pokemonspecy {
      pokemon_v2_pokemonspeciesflavortexts: PokemonV2Pokemonspeciesflavortexts[];
  }

  export interface PokemonV2Pokemon {
      id: number;
      name: string;
      height: number;
      weight: number;
      pokemon_v2_pokemonstats_aggregate: PokemonV2PokemonstatsAggregate;
      pokemon_v2_pokemontypes: PokemonV2Pokemontypes[];
      pokemon_v2_pokemonstats: PokemonV2Pokemonstats[];
      pokemon_v2_pokemonspecy: PokemonV2Pokemonspecy;
  }

  export interface Data {
      pokemon_v2_pokemon: PokemonV2Pokemon[];
  }

  export interface RootObject {
      data: Data;
  }



