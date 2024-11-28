import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const Team = ({ valor, carregaTeams, excluir }) => {
  const isExcluir = excluir;

  const remover = (id) => {
    const api = "https://project-ea-football.onrender.com/teams";
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        carregaTeams();
        Alert.alert("Sucesso", "Time removido com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível remover o time.");
      });
  };

  return (
    <View style={styles.cardProd}>
      <View style={styles.nomeLogo}>
        <Image source={{ uri: valor.team_shield }} style={styles.imagem} />
        <Text style={styles.titulo}>{valor.nome_team}</Text>
        <View style={styles.hr} />
      </View>
      <View style={styles.conteudoSection}>
        <View style={styles.conteudo}>
          <Text style={styles.subtitulo}>
            <Text style={styles.subtituloBold}>Treinador: </Text>
            {valor.coach}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.subtituloBold}>Presidente: </Text>
            {valor.president}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.subtituloBold}>Estádio: </Text>
            {valor.stadium}
          </Text>
          <Text style={styles.subtitulo}>
            <Text style={styles.subtituloBold}>Cidade: </Text>
            {valor.city}
          </Text>
        </View>
      </View>
      {isExcluir && (
        <TouchableOpacity onPress={() => remover(valor._id)} style={styles.iconContainer}>
          <MaterialIcons name="delete" size={40} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  cardProd: {
    width: 350,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ebe5eb",
    borderRadius: 8,
    textAlign: "center",
    margin: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  nomeLogo: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    color: "#20201F",
    fontFamily: "Archivo Black",
    fontSize: 20,
    marginTop: 10,
  },
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
  conteudoSection: {
    alignItems: "center",
  },
  conteudo: {
    alignItems: "flex-start",
    gap: 10,
  },
  subtitulo: {
    fontSize: 17,
    fontWeight: "400",
  },
  subtituloBold: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconContainer: {
    marginTop: 20,
  },
});
