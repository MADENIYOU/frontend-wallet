//@ts-nocheck

import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { ThemeContext } from '../context/ThemeContext';

const ValidationIndicator = ({ isValid, text, theme }) => (
  <Text style={[getStyles(theme).validationText, { color: isValid ? '#28a745' : '#dc3545' }]}>
    {isValid ? '✔' : '✖'} {text}
  </Text>
);

const SignUpScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const [fullName, setFullName] = useState('');
  const [cni, setCni] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [password, setPassword] = useState('');

  const [isFullNameValid, setIsFullNameValid] = useState(false);
  const [isCniValid, setIsCniValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
    nameNotInPassword: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const phoneInput = useRef(null);

  useEffect(() => {
    setIsFullNameValid(fullName.trim().length > 0);
  }, [fullName]);

  useEffect(() => {
    setIsCniValid(cni.length === 13 || cni.length === 14);
  }, [cni]);

  useEffect(() => {
    const checkPhone = phoneInput.current?.isValidNumber(formattedValue) ?? false;
    setIsPhoneValid(checkPhone);
  }, [formattedValue]);

  useEffect(() => {
    const names = fullName.toLowerCase().split(' ').filter(name => name.length > 0);
    const passwordLower = password.toLowerCase();
    const nameNotInPassword = names.length === 0 || names.every(name => !passwordLower.includes(name));

    setPasswordCriteria({
      length: password.length >= 10,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
      nameNotInPassword: nameNotInPassword,
    });
  }, [password, fullName]);

  useEffect(() => {
    const allPasswordCriteriaMet = Object.values(passwordCriteria).every(Boolean);
    setIsFormValid(isFullNameValid && isCniValid && isPhoneValid && allPasswordCriteriaMet);
  }, [isFullNameValid, isCniValid, isPhoneValid, passwordCriteria]);

  const handleSignUp = () => {
    if (isFormValid) {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={theme === 'light' ? "dark-content" : "light-content"} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.flagContainer}>
            <View style={[styles.flagStripe, styles.flagGreen]} />
            <View style={[styles.flagStripe, styles.flagYellow]}>
              <Text style={styles.star}>★</Text>
            </View>
            <View style={[styles.flagStripe, styles.flagRed]} />
          </View>
          <Text style={styles.headerTitle}>TerangaID</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Créer un compte</Text>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Prénom et Nom"
              placeholderTextColor={styles.placeholderText.color}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Numéro de CNI (NIN)"
            placeholderTextColor={styles.placeholderText.color}
            keyboardType="numeric"
            value={cni}
            onChangeText={setCni}
            maxLength={14}
          />
          {cni.length > 0 && <ValidationIndicator isValid={isCniValid} text="Le NIN doit faire 13 ou 14 chiffres" theme={theme} />}
        </View>

        <View style={styles.inputGroup}>
          <PhoneInput
            ref={phoneInput}
            value={phoneNumber}
            defaultCode="SN"
            layout="first"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={setFormattedValue}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.phoneTextContainer}
            textInputStyle={styles.phoneTextInput}
            codeTextStyle={styles.phoneCodeText}
            flagButtonStyle={styles.flagButton}
            withDarkTheme={theme === 'dark'}
            withShadow
            autoFocus
          />
          {formattedValue.length > 2 && <ValidationIndicator isValid={isPhoneValid} text="Le numéro de téléphone doit être valide" theme={theme} />}
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor={styles.placeholderText.color}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.criteriaContainer}>
            <ValidationIndicator isValid={passwordCriteria.length} text="Au moins 10 caractères" theme={theme} />
            <ValidationIndicator isValid={passwordCriteria.uppercase} text="Au moins une majuscule" theme={theme} />
            <ValidationIndicator isValid={passwordCriteria.number} text="Au moins un chiffre" theme={theme} />
            <ValidationIndicator isValid={passwordCriteria.specialChar} text="Au moins un caractère spécial" theme={theme} />
            <ValidationIndicator isValid={passwordCriteria.nameNotInPassword} text="Ne doit pas contenir votre nom ou prénom" theme={theme} />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          disabled={!isFormValid}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Déjà un compte ? Connectez-vous</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20, // Ajout de padding en haut
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  flagContainer: {
    flexDirection: 'row',
    width: 45,
    height: 27,
    marginRight: 10,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme === 'light' ? '#1e3a5f' : '#f0f4f8',
  },
  flagStripe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagGreen: {
    backgroundColor: '#00853f',
  },
  flagYellow: {
    backgroundColor: '#fdef42',
  },
  flagRed: {
    backgroundColor: '#e31b23',
  },
  star: {
    fontSize: 10,
    color: '#00853f',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: theme === 'light' ? '#ffffff' : '#2d3748',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? '#d1d9e6' : '#4a5568',
    fontSize: 16,
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
    height: 50,
  },
  placeholderText: {
    color: theme === 'light' ? '#a0aec0' : '#718096',
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: theme === 'light' ? '#d1d9e6' : '#4a5568',
    borderRadius: 10,
    backgroundColor: theme === 'light' ? '#fff' : '#2d3748',
  },
  phoneTextContainer: {
    backgroundColor: theme === 'light' ? '#fff' : '#2d3748',
    borderRadius: 10,
    paddingVertical: 0,
  },
  phoneTextInput: {
    height: 50,
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
    fontSize: 16,
  },
  phoneCodeText: {
    color: theme === 'light' ? '#1e3a5f' : '#e2e8f0',
  },
  flagButton: {
    backgroundColor: theme === 'light' ? '#ffffff' : '#2d3748',
    // Ajoutez d'autres styles si nécessaire, comme le padding, la bordure, etc.
  },
  criteriaContainer: {
    marginTop: 8,
    paddingLeft: 5,
  },
  validationText: {
    marginTop: 5,
    paddingLeft: 5,
    fontSize: 12,
  },
  button: {
    backgroundColor: theme === 'light' ? '#007bff' : '#63b3ed',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: theme === 'light' ? '#a0c8ff' : '#4299e1',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: theme === 'light' ? '#007bff' : '#63b3ed',
    fontWeight: '600',
  },
});

export default SignUpScreen;
