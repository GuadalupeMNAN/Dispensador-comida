import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import FirebaseConfig from "../../../FirebaseConfig";
import { Button } from 'react-native-paper';
import { getDatabase, ref, get, update, child } from "firebase/database";

const ScreenPuerta = () => {
  const [datos, setDatos] = React.useState(null)

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const db = getDatabase(FirebaseConfig.app);
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "Casa"));
      if (snapshot.exists()) {
        const datosObtenidos = snapshot.val();
        console.log("Datos obtenidos:", datosObtenidos);
        setDatos(datosObtenidos); // Actualiza el estado de los datos obtenidos
      } else {
        console.log("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }

  const cambiarestadoluz = async (Lugar, nuevoestado) => {
    const db = getDatabase(FirebaseConfig.app);
    const referencia = ref(db, `Casa/${lugar}`);



    try {
      await update(referencia, { status: nuevoStatus });
      console.log("Datos actualizados correctamente");
      obtenerDatos(); // Vuelve a obtener los datos para reflejar los cambios
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
  }

  return (
    <View style={styles.contenedor}>
      {datos ? (<>
        <Text>Cocina status:{datos.Luz.Cocina.Status}</Text>
        <Button icon={datos.Luz.Cocina.Status === 1 ? "lightbulb-on" : "lightbulb-off"} mode={datos.Luz.Cocina.Status === 1 ? "contained" : "outlined"}
          onPress={() => cambiarestadoluz('Luz/Cocina', datos.Luz.Cocina.Status === 1 ? 0 : 1)}>
          Luz: Cocina.
        </Button>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Puerta: Sala.
        </Button>
      </>) : (<>
        <Text>Cargando...</Text>
      </>)}
    </View>
  )
}

export default ScreenPuerta

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center'
  }
})