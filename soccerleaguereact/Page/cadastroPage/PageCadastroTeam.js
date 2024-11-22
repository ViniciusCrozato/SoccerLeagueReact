import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarraMenu from '../../Componentes/BarraMenu';  // Certifique-se de que o caminho está correto
import CadastroTeams from '../../Componentes/CadastroTeams';  // Certifique-se de que o caminho está correto

export default function PaginaCadastroTeam() {
  return (
    <View style={styles.body}>
      <BarraMenu />

      <View style={styles.cadastroSection}>
        <CadastroTeams />
      </View>
    </View>
  );
}

// Estilos usando StyleSheet do React Native
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Cor de fundo para o corpo da página
  },
  cadastroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
