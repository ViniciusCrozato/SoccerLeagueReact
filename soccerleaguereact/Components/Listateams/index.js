import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Team from "../Team";

const ListaTeams = ({ teams, carregaTeams, excluir }) => {
  return (
    <View style={styles.lista}>
      <FlatList
        data={teams}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Team valor={item} carregaTeams={carregaTeams} excluir={excluir} />
        )}
      />
    </View>
  );
};

export default ListaTeams;

const styles = StyleSheet.create({
  lista: {
    textAlign: "center", // Apenas centraliza texto se houver.
    flex: 1, // Garante que o componente ocupe toda a área disponível.
  },
});
