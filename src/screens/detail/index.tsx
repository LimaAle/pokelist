import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import PokemonAvatar from "../../components/avatar";
import Header from "../../components/header";
import RectangleInfo from "../../components/rectangleInfo";
import RectangleNumber from "../../components/rectangleNumber";
import { COLORS } from "../../constants";
import { POKEMON_BY_ID } from "../../gql/pokemon";
import { PokemonData, PokemonV2Pokemon } from "../../interfaces/ipokemon";
import { addLeadingZeros, captalizeText, colorsForPokemon, convertHeight, convertWeight, correctText } from "../../utils/utils";
import StatsInfoLine from "./components/statsInfoLine";
import { Container, TopContent,TopContainer, MaleIcon, FemaleIcon, Description, InfoContainer, MinorText, InfoContainerColumn, PokemonName, GenderContainer, GenderText, GenderValue, GenderValueContainer, GenderTitle } from "./styles";

export default function DetailScreen({ route, navigation }) {
  let colors;
  const { id } = route.params;
  const { loading, data } = useQuery<PokemonData>(POKEMON_BY_ID, {
    variables: { id }, onCompleted(data) {
      setPokemon(data.pokemon_v2_pokemon[0])
      console.log(data.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text)
    },
    
  })
  useEffect(() => { setPokemon(data?.pokemon_v2_pokemon[0]) }, [data])
  const [pokemon, setPokemon] = useState<PokemonV2Pokemon>();

  colors = colorsForPokemon(pokemon?.pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  return (
    <>
      <Header goBack={() => navigation.goBack()} hasGoBack />
      {
        loading ? <ActivityIndicator size={"large"} /> :
          <>
            <TopContent color={colors.background}>
              <View style={{ flexDirection: "row" }}>
                <PokemonAvatar id={id} background={colors.avatar} large />
                <TopContainer>
                  <RectangleNumber number={id} />
                  <PokemonName isDark={colors.darkText}>{captalizeText(pokemon?.name)}</PokemonName>
                  <FlatList
                    scrollEnabled={false}
                    style={{maxHeight:50}}
                    horizontal
                    data={pokemon?.pokemon_v2_pokemontypes}
                    renderItem={({ item }) => <RectangleInfo text={captalizeText(item.pokemon_v2_type.name)} color={colors.type} isDark={colors.darkText} large />}
                  />
                </TopContainer>
              </View>
            </TopContent>
            <Container>
              <Description>
                {JSON.stringify(correctText(pokemon?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text))}
              </Description>
              <InfoContainer>
                <InfoContainerColumn>
                  <MinorText>Weight:</MinorText>
                  <RectangleInfo text={convertWeight(pokemon?.weight)} color={colors.type} isBold />
                </InfoContainerColumn>
                <InfoContainerColumn>
                  <MinorText>Height:</MinorText>
                  <RectangleInfo text={convertHeight(pokemon?.height)} color={colors.type} isBold />
                </InfoContainerColumn>
                <InfoContainerColumn>
                  <MinorText>Major Move:</MinorText>
                  <RectangleInfo text={"Solar Beam"} color={colors.type} isBold />
                </InfoContainerColumn>
              </InfoContainer>
              <GenderContainer>
                <GenderTitle>Gender</GenderTitle>
                <GenderValueContainer>
                  <GenderValue>
                    <MaleIcon name='male' size={20} />
                    <GenderText>87.5%</GenderText>
                  </GenderValue>
                  <GenderValue>
                    <FemaleIcon name='female' size={20} />
                    <GenderText>12.5%</GenderText>
                  </GenderValue>
                </GenderValueContainer>
              </GenderContainer>
              <View style={{ maxHeight: 150 }}>
                <FlatList
                  style={{}}
                  scrollEnabled={false}
                  data={pokemon?.pokemon_v2_pokemonstats}
                  renderItem={({ item }) => (
                    <StatsInfoLine title={captalizeText(item.pokemon_v2_stat.name)} value={item.base_stat} />
                  )}
                />
              </View>
              <StatsInfoLine title="Total" value={pokemon?.pokemon_v2_pokemonstats_aggregate.aggregate.sum.base_stat} total />
            </Container>
          </>
      }
    </>
  );
}