import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, useFocusEffect  } from "@react-navigation/native";
import axios from 'axios';
import ListaTeams from '../../Components/Listateams/index'; // Supondo que ListaTeams já esteja adaptado para React Native

export default function PaginaExcluirTeam() {
  const [teams, setTeams] = useState([]);


  useFocusEffect(
    useCallback(() => {
      carregaTeams();
    }, [])
  );

  useEffect(() => {
    carregaTeams();
  }, []);

  function carregaTeams() {
    axios.get('https://project-ea-football.onrender.com/teams')
      .then(res => {
        setTeams(res.data);
        console.log(res.data);  // Verifique a resposta para depuração
      });
  }

  return (
      <View style={styles.teamsSection}>
        <Text style={styles.title}>Exclusão de times</Text>
        <ScrollView>
          <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={true} />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Cor de fundo genérica
  },
  teamsSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});