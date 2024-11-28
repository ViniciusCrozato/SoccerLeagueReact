import React from 'react';
import { View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './Components/NavBar/index.js'; // Importando o componente Navbar

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  );
}
