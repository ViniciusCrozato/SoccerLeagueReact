import * as Notifications from "expo-notifications";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";

import axios from "axios";  

export default function CadastroTeams() {



  useEffect(() => {
    // Solicita permissão para exibir notificações
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão para notificações foi negada!");
      }
    };

    requestPermissions();

    // Configura como as notificações serão exibidas (somente para iOS)
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  const [form, setForm] = useState({
    nome: "",
    escudo: "",
    treinador: "",
    presidente: "",
    estadio: "",
    cidade: "",
  });

  const adicionaTeam = () => {
    const { nome, escudo, treinador, presidente, estadio, cidade } = form;
    const teams = {
      nome_team: nome,
      team_shield: escudo,
      coach: treinador,
      president: presidente,
      stadium: estadio,
      city: cidade,
    };

    console.log(teams);

    axios
      .post("https://project-ea-football.onrender.com/teams", teams)
      .then(async () => {
        Alert.alert("Sucesso", "Time cadastrado com sucesso!");
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Time cadastrado! 🎉",
            body: `O time ${nome} foi cadastrado com sucesso!`,
            data: { extraData: "Time cadastrado" },
          },
          trigger: null, // Notificação imediata
          
        });
       
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível cadastrar o time.");
      });

      
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.cardCad}>
      <View style={styles.textSection}>
        {/* <Image source={require("../../assets/Logo_soccerLeague.png")} style={styles.logo} /> */}
        <Text style={styles.heading}>Venha participar da Liga</Text>
      </View>

      <View style={styles.formSection}>
        {[
          { label: "Time", key: "nome" },
          { label: "Escudo", key: "escudo" },
          { label: "Treinador", key: "treinador" },
          { label: "Presidente", key: "presidente" },
          { label: "Estádio", key: "estadio" },
          { label: "Cidade", key: "cidade" },
        ].map((field) => (
          <View key={field.key} style={styles.inputContainer}>
            <Text style={styles.label}>{field.label}:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => handleInputChange(field.key, value)}
              value={form[field.key]}
              placeholder={`Digite o ${field.label.toLowerCase()}`}
            />
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={adicionaTeam}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCad: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "rgba(166, 25, 166, 0.668)",
    margin: 20,
    overflow: "hidden",
  },
  textSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A0E1B",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  formSection: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#561F52",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F5F5DC",
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    width: "100%", // Largura total do container
    maxWidth: 300, // Limita a largura do input, se necessário
    overflow: "hidden", // Previne que o conteúdo ultrapasse
  },
  button: {
    backgroundColor: "rgba(69, 2, 120, 0.545)",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
  },
});
