import React from 'react';
import { render } from '@testing-library/react-native';
import RectangleInfo from '..';

describe('rectangle info',()=>{
  
  test('the component rendered', () => {
    render(<RectangleInfo text={'grass'} color={'#0f0'} />);

  })

})

