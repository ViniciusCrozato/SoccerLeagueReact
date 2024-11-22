import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import BarraMenu from '../../Componentes/BarraMenu';  // Certifique-se de que o caminho está correto
import ListaTeams from '../../Componentes/Listateams'; // Certifique-se de que o caminho está correto

export default function PaginaExcluirTeam() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    carregaTeams();
  }, []);

  // Função para carregar os times da API
  function carregaTeams() {
    axios
      .get('https://project-ea-football.onrender.com/teams')
      .then((res) => {
        setTeams(res.data);
        console.log(res.data);  // Verifica os times carregados
      })
      .catch((error) => {
        console.error('Erro ao carregar os times:', error);
      });
  }

  return (
    <View style={styles.container}>
      <BarraMenu />

      <View style={styles.teamsSection}>
        <Text style={styles.title}>Exclusão de times</Text>

        <ScrollView contentContainerStyle={styles.teamsList}>
          <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={true} />
        </ScrollView>
      </View>
    </View>
  );
}

// Estilos com StyleSheet do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  teamsSection: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  teamsList: {
    paddingBottom: 20,
  },
});
