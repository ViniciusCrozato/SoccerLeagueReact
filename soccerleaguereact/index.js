import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as páginas
import App from './App';
// import PageCadastroTeam from './Page/cadastroPage/PageCadastroTeam';
// import PageExcluirTeam from './Page/excluirPage/PageExcluirTeam';

// Criando o Stack Navigator
const Stack = createStackNavigator();

export default function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={App} />
          {/* <Stack.Screen name="CadastroTeam" component={PageCadastroTeam} />
          <Stack.Screen name="ExcluirTeam" component={PageExcluirTeam} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
