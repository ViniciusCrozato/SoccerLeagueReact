import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Logo from "../../Images/Logo_soccerLeague.png"; // Importando a imagem do logo

export default function BarraMenu() {
  return (
    <View style={styles.nav}>
      {/* Logo */}
      <TouchableOpacity style={styles.menuLogo} onPress={() => console.log("Logo pressionado!")}>
        <Image source={Logo} style={styles.logoSoccerLeague} />
      </TouchableOpacity>

      {/* Lista de Links */}
      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Home pressionado!")}>
          <Text style={styles.menuLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Cadastrar Time pressionado!")}>
          <Text style={styles.menuLink}>Cadastrar Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => console.log("Excluir Times pressionado!")}>
          <Text style={styles.menuLink}>Excluir Times</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    padding: 15,
    backgroundColor: "#333",
    color: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Não é suportado nativamente, mas pode ser simulado com outras soluções.
    flexDirection: "row",
    alignItems: "center",
  },
  menuLogo: {
    marginLeft: 10,
    marginRight: 30,
  },
  logoSoccerLeague: {
    width: 35,
    height: 45,
  },
  menuList: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20, // React Native não tem suporte direto para `gap`, então isso pode ser feito com `margin`.
  },
  menuItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  menuLink: {
    color: "#fff",
    textDecorationLine: "none",
    padding: 10,
    borderRadius: 5,
    fontSize: 17,
  },
});
