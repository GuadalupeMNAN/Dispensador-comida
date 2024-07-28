import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth"

const ScreenSetting = () => {
  const navegacion = useNavigation()
  const cerrarsesion = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Aviso', 'Sesión cerrada correctamente.')
        navegacion.navigate('Login');
      })
      .catch((error) => {
        console.error('Error al cerrar la sesión: ', error);
      });
  }
  return (
    <View>
      <Text>Autora: Guadalupe Monserrat Nuñez Nangullasmu.</Text>
      <Text>TI52.</Text>
      <Text>Desarrollo de software.</Text>
      <Button style={{ marginTop: 20 }} icon="logout" mode="contained" onPress={() => cerrarsesion()}>
        Cerrar Sesion
      </Button>
    </View>
  )
}

export default ScreenSetting

const styles = StyleSheet.create({})