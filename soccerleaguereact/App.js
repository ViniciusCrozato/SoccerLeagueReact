import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import ListaTeams from './Componentes/Listateams'; // Este componente também precisa ser adaptado para o React Native
import BarraMenu from './Componentes/BarraMenu';   // Adaptar BarraMenu para um componente nativo

export default function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    carregaTeams();
  }, []);

  function carregaTeams() {
    axios
      .get('https://project-ea-football.onrender.com/teams')
      .then(res => {
        setTeams(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      {/* Barra de Menu */}
      <BarraMenu />

      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Bem Vindo a Soccer League</Text>
      </View>

      {/* Lista de Times */}
      <ScrollView style={styles.teamsSection}>
        <Text style={styles.subtitle}>Lista de Times</Text>
        <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={false} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  teamsSection: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
