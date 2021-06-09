import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'

import Wellcome from './WellcomeComponent'
import SignUp from './SignUpComponent'

export default function ModalComponent() {

  const [visible, setVisible] = useState(true);

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType={"slide"}
      presentationStyle={"pageSheet"}
      style={styles.container}
    >
      <Swiper
        paginationStyle={{
          bottom: 100
        }}
        loop={false}
        showsButtons={false}
      >
        <View>
          <Wellcome />
        </View>
        <View>
          <SignUp />
          <Button onPress={() => setVisible(false)} title="close modal" />
        </View>
      </Swiper>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
  }
})