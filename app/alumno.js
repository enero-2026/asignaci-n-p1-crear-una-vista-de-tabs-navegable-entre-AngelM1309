import { View, Text, StyleSheet } from "react-native";

export default function Alumno() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pagina Alumno</Text>
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