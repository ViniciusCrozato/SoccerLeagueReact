import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import CadastroTeams from "../../Components/CadastroTeams/index";

export default function PaginaCadastroTeam() {
  return (
      <View style={styles.cadastroSection}>
        <ScrollView>
            <CadastroTeams />
        </ScrollView>
      </View>
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