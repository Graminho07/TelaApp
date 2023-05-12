import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bom dia</Text>
      <Text style={styles.subtitle}>Recomendação do dia</Text>
      <Image source={require('./ghost.png')} style={styles.image} />
      <Image source={require('./inicio_spotify.png')} style={styles.image} />
      <Button title="Entrar" onPress={() => {}} color="#1ED760" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  image: {
    width: 350,
    height: 155,
    marginBottom: 16,
  },
});
