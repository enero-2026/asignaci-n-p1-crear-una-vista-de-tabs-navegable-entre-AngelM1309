import { View, Text, StyleSheet } from "react-native";

export default function Detalle() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pagina Detalle</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },
});