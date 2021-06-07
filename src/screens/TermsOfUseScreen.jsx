import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TermsOfUseScreen() {

  return (
    <View>
      <View style={styles.line} />
      <Text>利用規約</Text>
      <View>
        <ScrollView>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
});