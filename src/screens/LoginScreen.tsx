import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const LoginScreen = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={theme === 'light' ? "dark-content" : "light-content"} />
      <View style={styles.container}>
        <Text style={styles.title}>Page de Connexion</Text>
        <Text style={styles.subtitle}>Votre collègue travaille ici !</Text>
      </View>
    </SafeAreaView>
  );
};

const getStyles = (theme) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme === 'light' ? '#f0f4f8' : '#1a202c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: theme === 'light' ? '#5a7a9f' : '#a0aec0',
    textAlign: 'center',
  },
});

export default LoginScreen;