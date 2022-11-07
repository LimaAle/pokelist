import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonAvatar from '..';

describe('Avatar pokemon',()=>{
  
  test('the component rendered', () => {
    render(<PokemonAvatar id={1} background={'#0f0'} />);

  })

})

