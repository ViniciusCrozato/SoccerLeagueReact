import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Logo from "../../Images/Logo_soccerLeague.png";

export default function CadastroTeams() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [escudo, setEscudo] = useState('');
    const [treinador, setTreinador] = useState('');
    const [presidente, setPresidente] = useState('');
    const [estadio, setEstadio] = useState('');
    const [cidade, setCidade] = useState('');

    function adicionaTeam() {
        const teams = {
            nome_team: nome,
            coach: treinador,
            president: presidente,
            stadium: estadio,
            city: cidade,
            team_shield: escudo
        };

        console.log(teams);
        axios.post('https://project-ea-football.onrender.com/teams', teams)
            .then(() => {
                navigation.navigate('Home');  // Navega para a tela inicial após o envio
            })
            .catch((error) => {
                console.error("Erro ao adicionar time:", error);
            });
    }

    return (
        <View style={styles.cardCad}>
            <View style={styles.textSection}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Venha participar da Liga</Text>
            </View>
            <View style={styles.formSection}>
                <Text>Time:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
                <Text>Escudo:</Text>
                <TextInput
                    style={styles.input}
                    value={escudo}
                    onChangeText={setEscudo}
                />
                <Text>Treinador:</Text>
                <TextInput
                    style={styles.input}
                    value={treinador}
                    onChangeText={setTreinador}
                />
                <Text>Presidente:</Text>
                <TextInput
                    style={styles.input}
                    value={presidente}
                    onChangeText={setPresidente}
                />
                <Text>Estádio:</Text>
                <TextInput
                    style={styles.input}
                    value={estadio}
                    onChangeText={setEstadio}
                />
                <Text>Cidade:</Text>
                <TextInput
                    style={styles.input}
                    value={cidade}
                    onChangeText={setCidade}
                />
                <Button title="Adicionar" onPress={adicionaTeam} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardCad: {
        height: '70%',
        width: '70%',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgba(166, 25, 166, 0.668)',
    },
    textSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        fontWeight: '700',
        backgroundColor: 'rgb(35,10,27)',
        background: 'linear-gradient(90deg, rgba(35,10,27,1) 0%, rgba(86,31,82,1) 35%, rgba(111,41,110,1) 100%)',
        color: 'white',
    },
    logo: {
        width: 295,
        height: 305,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10,
    },
    formSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: 'black',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        fontWeight: '300',
        backgroundColor: 'rgb(35,10,27)',
        background: 'linear-gradient(260deg, rgba(35,10,27,1) 0%, rgba(86,31,82,1) 35%, rgba(111,41,110,1) 100%)',
        color: '#ffffff',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'antiquewhite',
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'rgba(69, 2, 120, 0.545)',
        color: 'white',
        height: 65,
        width: 160,
        fontSize: 20,
    },
    buttonHover: {
        backgroundColor: 'rgba(69, 2, 120, 0.934)',
        height: 70,
        width: 170,
        fontSize: 20,
    },
});
