import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Mail from '../components/MailComponent';

export default function MailScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.line} />
      <Mail />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
});