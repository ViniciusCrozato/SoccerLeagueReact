import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from 'react-native-vector-icons';

const Team = ({ valor, carregaTeams, excluir }) => {
    const IsExcluir = excluir;

    const remover = (id) => {
        const api = "https://project-ea-football.onrender.com/teams";
        console.log(id);
        axios.delete(`${api}/${id}`)
            .then(() => {
                carregaTeams();
            }).catch((message) => console.log(message));
    };

    return (
        <View style={styles.cardProd}>
            <View style={styles.nomeLogo}>
                <Image
                    source={{ uri: valor.team_shield }}
                    style={styles.imagem}
                    alt="Imagem do Time"
                />
                <Text style={styles.titulo}>{valor.nome_team}</Text>
                <View style={styles.hr} />
            </View>
            <View style={styles.conteudoSection}>
                <View style={styles.conteudo}>
                    <Text style={styles.subtitulo}><Text style={styles.bold}>Treinador:</Text> {valor.coach}</Text>
                    <Text style={styles.subtitulo}><Text style={styles.bold}>Presidente:</Text> {valor.president}</Text>
                    <Text style={styles.subtitulo}><Text style={styles.bold}>Estádio:</Text> {valor.stadium}</Text>
                    <Text style={styles.subtitulo}><Text style={styles.bold}>Cidade:</Text> {valor.city}</Text>
                </View>
            </View>
            {IsExcluir && (
                <TouchableOpacity onPress={() => remover(valor._id)} style={styles.icone}>
                    <MaterialIcons name="delete" size={30} color="red" />
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
        borderRadius: 8,
        borderColor: '#ebe5eb',
        borderWidth: 0.1,
        textAlign: 'center',
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'white', // Adicionando cor de fundo
        elevation: 5, // Para dar sombra em dispositivos Android
    },
    nomeLogo: {
        alignItems: 'center',
        marginBottom: 10,
    },
    imagem: {
        maxHeight: 100,
        maxWidth: 110,
    },
    titulo: {
        color: '#202020',
        fontFamily: 'Archivo Black',  // O uso da fonte pode precisar ser ajustado no React Native
        fontWeight: '500',
    },
    hr: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    conteudoSection: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
    },
    conteudo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    subtitulo: {
        fontWeight: '400',
        fontSize: 17,
    },
    bold: {
        fontWeight: '600',
        fontSize: 18,
    },
    icone: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
});

export default Team;
