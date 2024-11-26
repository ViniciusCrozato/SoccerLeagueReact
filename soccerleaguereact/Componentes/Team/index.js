import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from 'react-native-vector-icons';

const Team = ({ valor, carregaTeams, excluir }) => {
  const IsExcluir = excluir;

  const remover = (id) => {
    const api = 'https://project-ea-football.onrender.com/teams';
    console.log(id);
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        carregaTeams();
      })
      .catch((message) => console.log(message));
  };

  return (
    <View style={styles.cardProd}>
      <View style={styles.nome_logo}>
        <Image source={{ uri: valor.team_shield }} style={styles.imagem} />
        <Text style={styles.titulo}>{valor.nome_team}</Text>
        <View style={styles.hr} />
      </View>
      <View style={styles.conteudoSection}>
        <View style={styles.conteudo}>
          <Text style={styles.subtitulo}>
            <Text style={styles.boldText}>Treinador: </Text>{valor.coach}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.boldText}>Presidente: </Text>{valor.president}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.boldText}>Estádio: </Text>{valor.stadium}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.boldText}>Cidade: </Text>{valor.city}
          </Text>
        </View>
      </View>

      {/* Ícone de excluir */}
      {IsExcluir && (
        <TouchableOpacity onPress={() => remover(valor._id)} style={styles.icone}>
          <MaterialIcons name="delete" size={40} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardProd: {
    width: 220,
    height: 280,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ebe5eb',
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
  },
  nome_logo: {
    alignItems: 'center',
  },
  imagem: {
    width: 110,
    height: 100,
    resizeMode: 'contain',
  },
  titulo: {
    color: '#201f1f',
    fontFamily: 'Archivo Black',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 8,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 8,
  },
  conteudoSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  conteudo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  subtitulo: {
    fontWeight: '400',
    fontSize: 17,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 18,
  },
  icone: {
    marginTop: 10,
  },
});

export default Team;
