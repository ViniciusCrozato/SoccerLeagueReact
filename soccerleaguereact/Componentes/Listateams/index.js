import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Team from '../Team';  // Importando o componente Team (em React Native)

const ListaTeams = ({ teams, carregaTeams, excluir }) => {
    return (
        <View style={styles.lista}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id.toString()}  // Supondo que cada time tenha um "id"
                renderItem={({ item }) => (
                    <Team
                        valor={item}
                        carregaTeams={carregaTeams}
                        excluir={excluir}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    lista: {
        alignItems: 'center',  // Equivalente ao "text-align: center" do CSS
        justifyContent: 'center', // Opcional: centralizar também verticalmente
        flex: 1,
    },
});

export default ListaTeams;
