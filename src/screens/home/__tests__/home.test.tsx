import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { MockedProvider } from "@apollo/client/testing";
import HomeScreen from '..';
import { mocks } from '../../../mock/mock';
describe('home', () => {

  test('loading and then card', async () => {

    const { queryByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen navigation={undefined} />
      </MockedProvider>);

    expect(queryByTestId("loading")).toBeTruthy()
    await waitFor(() => {

      expect(queryByTestId("card")).toBeTruthy()

    })
  })

})

