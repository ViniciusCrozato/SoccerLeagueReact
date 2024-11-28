import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Pages/HomePage/index';
import ExcluirScreen from '../../Pages/ExcluirPage/index'
import CadScreen from '../../Pages/CadastrarPage/index';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#333' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#333' },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cadastrar" component={CadScreen} />
      <Tab.Screen name="Excluir" component={ExcluirScreen} />
    </Tab.Navigator>
  );
};

export default Navbar;
