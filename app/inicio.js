import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Inicio() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pagina Inicio</Text>

      <View style={estilos.tabs}>
        <Link href="/inicio" asChild>
          <Pressable style={estilos.boton}>
            <Text style={estilos.textoBoton}>Inicio</Text>
          </Pressable>
        </Link>

        <Link href="/alumno" asChild>
          <Pressable style={estilos.boton}>
            <Text style={estilos.textoBoton}>Alumno</Text>
          </Pressable>
        </Link>

        <Link href="/detalle" asChild>
          <Pressable style={estilos.boton}>
            <Text style={estilos.textoBoton}>Detalle</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 250,
  },
  tabs: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#20232a",
  },
  boton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});