import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/config/routes/indes';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import {ThemeProvider} from 'styled-components/native';
import Theme from './src/config/Theme';

export type RootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.HOME]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <Stack.Navigator
          screenOptions={{
            animation: 'fade',
            headerShown: false,
          }}>
          <Stack.Screen name={Routes.LOGIN} component={Login} />
          <Stack.Screen name={Routes.HOME} component={Home} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
