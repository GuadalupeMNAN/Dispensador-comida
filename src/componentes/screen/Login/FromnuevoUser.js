import { StyleSheet } from 'react-native'
import React from 'react'
import { Modal, Portal, Text, Button } from 'react-native-paper';

const FromnuevoUser = (props) => {
  const saludar = props.saludar;
  const user = props.user;
  /*const nombre = props.persona.nombre;
  const escolaridad = props.persona.Escolaridad;
  const escolaridad = props.persona.Especialidad;*/

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Hola, saludos mi estimada: { }</Text>

          <Button style={{ marginTop: 30 }} onPress={() => saludar(user)}>
            Saludos
          </Button>

        </Modal>
      </Portal>

      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Editar cuenta
      </Button>
      
    </>
  )
}

export default FromnuevoUser

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})