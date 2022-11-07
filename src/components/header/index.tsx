import React from 'react'
import { Image} from 'react-native';
import { Container, BackButton, ImageContainer } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface props {
  goBack?: () => void;
  hasGoBack?: boolean;
}
export default function Header({ goBack, hasGoBack }: props) {
  return (
    <Container>
        <BackButton testID="headerButton" onPress={goBack} hasGoBack={hasGoBack} >
          <Ionicons name="arrow-back" size={25} color="white" />
        </BackButton>
      <ImageContainer hasGoBack={hasGoBack}>
        <Image source={require('../../../assets/pokemonlogo.png')} />
      </ImageContainer>
    </Container>
  );
}