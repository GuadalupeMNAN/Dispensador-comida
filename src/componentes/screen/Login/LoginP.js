import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const LoginP = () => {

  /* const app = initializeApp (firebaseConfig)
  const auth = getAuth (app)


  const [user, setUser] = React.useState()
  const [password, setPassword] = React.useState()

  const crearcuenta = ()=>{
    createUserWithEmailAndPassword(auth, user, password)
    .then((userCredential)=>{
      Alert.alert('Cuanta creada')
      console.log('Cuenta creada')
      const user = userCredential.user
      console.log(user)
    } 
    )
    .catch((error)=>{
      console.log(error)
    })

  }

  const Login = ()=>{
    signInWithEmailAndPassword(auth, user, password)
    .then((userCredential)=>{
      Alert.alert('Biemvenido user: ', user.email);
      console.log(user)
    } 
    )
    .catch((error)=>{
      Alert.alert('error de mensaje')
      console.log(error)
    })

  }*/

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Hola</Text>
      <Text style={styles.titulo2}>Iniciar sesion</Text>
      <View style={styles.contenedorinput}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          keyboardType="text"
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Contraseña"
          keyboardType="text"
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Procesando...")}>
            <Text style={{ color: 'while', textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default LoginP;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CDCDCD'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 53,
    color: 'Black',
    fontWeight: 'bold'
  },
  titulo2: {
    fontSize: 20,
    textAlign: 'center'
  },
  contenedorinput: {
    padding: 15
  },
  input: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  button: {
    width: 250,
    padding: 10,
    marginTop: 25,
    backgroundColor: "#C469D8",
    borderRadius: 15
  }
});