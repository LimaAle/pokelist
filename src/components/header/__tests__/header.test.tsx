import React from 'react';
import { render,fireEvent } from '@testing-library/react-native';
import Header from '..';

describe('header component',()=>{
  
  test('go back button', () => {
    const goBackFn = jest.fn()
    const{getByTestId}=render(<Header goBack={goBackFn} hasGoBack/>);


    expect(getByTestId("headerButton")).toBeTruthy();

    fireEvent.press(getByTestId('headerButton'))
    expect(goBackFn).toBeCalled()
  })

})

