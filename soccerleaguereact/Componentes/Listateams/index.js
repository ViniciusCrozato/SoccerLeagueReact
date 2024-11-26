import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Team from '../Team'; // Supondo que Team seja um componente nativo já adaptado para React Native

const ListaTeams = ({ teams, carregaTeams, excluir }) => {
  return (
    <View style={styles.lista}>
      {/* Usando FlatList para renderizar a lista de times */}
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}  // Assumindo que cada time tem um 'id' único
        renderItem={({ item }) => (
          <Team valor={item} carregaTeams={carregaTeams} excluir={excluir} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListaTeams;
