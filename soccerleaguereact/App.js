import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BarraMenu from './Componentes/BarraMenu';  // Ajuste o caminho conforme necessário
import HomeScreen from './screens/HomeScreen';  // Ajuste o caminho conforme necessário
import CadastroTeamScreen from './screens/CadastroTeamScreen';
import ExcluirTeamScreen from './screens/ExcluirTeamScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastrar Time" component={CadastroTeamScreen} />
        <Stack.Screen name="Excluir Time" component={ExcluirTeamScreen} />
      </Stack.Navigator> */}

      {/* BarraMenu sendo usada globalmente */}
      <BarraMenu />

    </NavigationContainer>
  );
}

export default App;
