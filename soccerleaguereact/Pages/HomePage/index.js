import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { NavigationContainer, useFocusEffect  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaTeams from "../../Components/Listateams/index";

const Stack = createStackNavigator();

export default function HomeScreen() {
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
    axios
      .get("https://project-ea-football.onrender.com/teams")
      .then((res) => {
        setTeams(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Erro ao carregar times:", err));
  }

  return (
    <View style={styles.container}>
    {/* Barra de navegação */}

    {/* Título principal */}
    <View style={styles.header}>
      <Text style={styles.title}>Bem Vindo à Soccer League</Text>
    </View>

    {/* Lista de times */}
    <ScrollView style={styles.teamsSection}>
      <Text style={styles.subtitle}>Lista de Times</Text>
      <ScrollView>
        <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={false} />
      </ScrollView>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  teamsSection: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
});
