import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Para navegação

import Logo from "../../Images/Logo_soccerLeague.png"; // Logo da aplicação

export default function CadastroTeams() {
  const navigation = useNavigation(); // Hook para navegação
  const [nome, setNome] = useState('');
  const [escudo, setEscudo] = useState('');
  const [treinador, setTreinador] = useState('');
  const [presidente, setPresidente] = useState('');
  const [estadio, setEstadio] = useState('');
  const [cidade, setCidade] = useState('');

  const adicionaTeam = () => {
    const teamData = {
      nome_team: nome,
      coach: treinador,
      president: presidente,
      stadium: estadio,
      city: cidade,
      team_shield: escudo,
    };

    console.log(teamData);

    axios.post('https://project-ea-football.onrender.com/teams', teamData)
      .then(response => {
        console.log('Team added successfully');
        navigation.navigate('Home'); // Navega para a tela Home após adicionar o time
      })
      .catch(error => {
        console.error('There was an error adding the team!', error);
      });
  };

  return (
    <View style={styles.cardCad}>
      {/* Seção de texto e logo */}
      <View style={styles.textSection}>
        <Image source={Logo} style={styles.logoSoccerLeague} />
        <Text style={styles.header}>Venha participar da Liga</Text>
      </View>

      {/* Seção de formulário */}
      <View style={styles.formSection}>
        <Text style={styles.label}>Time:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome do time"
        />
        
        <Text style={styles.label}>Escudo:</Text>
        <TextInput
          style={styles.input}
          value={escudo}
          onChangeText={setEscudo}
          placeholder="URL do escudo"
        />

        <Text style={styles.label}>Treinador:</Text>
        <TextInput
          style={styles.input}
          value={treinador}
          onChangeText={setTreinador}
          placeholder="Nome do treinador"
        />

        <Text style={styles.label}>Presidente:</Text>
        <TextInput
          style={styles.input}
          value={presidente}
          onChangeText={setPresidente}
          placeholder="Nome do presidente"
        />

        <Text style={styles.label}>Estádio:</Text>
        <TextInput
          style={styles.input}
          value={estadio}
          onChangeText={setEstadio}
          placeholder="Nome do estádio"
        />

        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          value={cidade}
          onChangeText={setCidade}
          placeholder="Cidade do time"
        />

        <Button title="Adicionar" onPress={adicionaTeam} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCad: {
    flexDirection: "row",
    height: '70%',
    width: '90%',
    marginTop: '10%',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(166, 25, 166, 0.668)',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  textSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'black',
    backgroundColor: 'linear-gradient(90deg, rgba(35,10,27,1) 0%, rgba(86,31,82,1) 35%, rgba(111,41,110,1) 100%)',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
  },
  logoSoccerLeague: {
    width: 295,
    height: 305,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  formSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    backgroundColor: 'linear-gradient(260deg, rgba(35,10,27,1) 0%, rgba(86,31,82,1) 35%, rgba(111,41,110,1) 100%)',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'antiquewhite',
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
});
