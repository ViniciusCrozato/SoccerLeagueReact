import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import BarraMenu from "../../Componentes/BarraMenu";
import CadastroTeams from "../../Componentes/CadastroTeams";

export default function PaginaCadastroTeam() {
  return (
    <SafeAreaView style={styles.body}>
      <BarraMenu />
      
      <View style={styles.cadastroSection}>
        <CadastroTeams />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#230a1b',
    width: '100%',
  },
  cadastroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
