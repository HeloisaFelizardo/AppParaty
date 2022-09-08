import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial';
import TelaRestaurantes from './componentes/TelaRestaurantes';
import TelaPasseios from './componentes/TelaPasseios';
import TelaHospedagem from './componentes/TelaHospedagem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial } />
        <Stack.Screen name="Hospedagem" component = { TelaHospedagem } />
        <Stack.Screen name="Passeios" component = { TelaPasseios } />
        <Stack.Screen name="Restaurantes" component = { TelaRestaurantes } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}