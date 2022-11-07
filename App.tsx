import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomStatusBar from './src/components/statusbar';

import HomeScreen from './src/screens/home';
import DetailScreen from './src/screens/detail';
import ContextProvider from './src/context/context';
import Header from './src/components/header';
const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <CustomStatusBar />
          <ContextProvider>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>

              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailScreen} />

            </Stack.Navigator>
          </ContextProvider>
      </NavigationContainer>
    </ApolloProvider>
  )
};


export default App;
