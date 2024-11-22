import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../../Images/Logo_soccerLeague.png"; // Importe o logo corretamente

// BarraMenu como componente de classe ou funcional

class BarraMenu extends React.Component {
  render() {
    return (
      <View style={styles.nav}>
        <TouchableOpacity style={styles.menuLogo} onPress={() => { /* Navegação para a Home */ }}>
          <Image source={Logo} style={styles.logoSoccerLeague} />
        </TouchableOpacity>
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navegação para Home */ }}>
            <Text style={styles.menuLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navegação para CadastroTime */ }}>
            <Text style={styles.menuLink}>Cadastrar Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => { /* Navegação para ExcluirTime */ }}>
            <Text style={styles.menuLink}>Excluir Times</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: 15,
    backgroundColor: "#333",
    color: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    flexDirection: "row",
    alignItems: "center",
  },
  menuLogo: {
    margin: "0 30px 0 10px",
  },
  logoSoccerLeague: {
    width: 35,
    height: 45,
  },
  menuList: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  menuItem: {
    margin: "0 10px",
  },
  menuLink: {
    color: "#fff",
    textDecorationLine: "none",
    padding: 10,
    borderRadius: 5,
    fontSize: 17,
  },
});

export default BarraMenu;
