
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={theme === 'light' ? "dark-content" : "light-content"} />
      <View style={styles.container}>
        <Text style={styles.title}>TerangaID</Text>
        <Text style={styles.subtitle}>Votre identité numérique sécurisée</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.buttonText, styles.primaryButtonText]}>Créer un compte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Se connecter</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 48,
    fontWeight: 'bold',
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: theme === 'light' ? '#5a7a9f' : '#a0aec0',
    marginBottom: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: theme === 'light' ? '#007bff' : '#63b3ed',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme === 'light' ? '#007bff' : '#63b3ed',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#ffffff',
  },
  secondaryButtonText: {
    color: theme === 'light' ? '#007bff' : '#63b3ed',
  },
});

export default HomeScreen;
