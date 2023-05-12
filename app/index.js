import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

export default function app() {
  
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={require('./spotify_logo.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button title="Entrar" onPress={() => router.push("/Tela2")} color="#1ED760" />
      </View>
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
  main: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 90,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: '#FFFFFF',
  },
});
