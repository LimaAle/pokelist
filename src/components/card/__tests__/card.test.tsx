import React from 'react';
import { render } from '@testing-library/react-native';
import PokeCard from '..';

describe('card pokemon',()=>{
  
  test('the component rendered', () => {
    render(<PokeCard id={0} name={''} pokemon_v2_pokemontypes={[]} />);

  })

})

