import React from 'react';
import { render } from '@testing-library/react-native';
import RectangleNumber from '..';

describe('rectangle number',()=>{
  
  test('rectangle number rendered', () => {
    const {getByText}=render(<RectangleNumber number={2}/>);
    
    expect(getByText("#002")).toBeTruthy();
  })

})

