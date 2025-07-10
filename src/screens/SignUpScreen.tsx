
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const ValidationIndicator = ({ isValid, text }) => (
  <Text style={[styles.validationText, { color: isValid ? '#28a745' : '#dc3545' }]}>
    {isValid ? '✔' : '✖'} {text}
  </Text>
);

const SignUpScreen = ({ navigation }) => {
  const [cni, setCni] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [password, setPassword] = useState('');

  const [isCniValid, setIsCniValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const phoneInput = useRef(null);

  useEffect(() => {
    setIsCniValid(cni.length === 13 || cni.length === 14);
  }, [cni]);

  useEffect(() => {
    const checkPhone = phoneInput.current?.isValidNumber(formattedValue) ?? false;
    setIsPhoneValid(checkPhone);
  }, [formattedValue]);

  useEffect(() => {
    setPasswordCriteria({
      length: password.length >= 10,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    });
  }, [password]);

  useEffect(() => {
    const allPasswordCriteriaMet = Object.values(passwordCriteria).every(Boolean);
    setIsFormValid(isCniValid && isPhoneValid && allPasswordCriteriaMet);
  }, [isCniValid, isPhoneValid, passwordCriteria]);

  const handleSignUp = () => {
    if (isFormValid) {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Créer un compte</Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Numéro de CNI (NIN)"
            keyboardType="numeric"
            value={cni}
            onChangeText={setCni}
            maxLength={14}
          />
          {cni.length > 0 && <ValidationIndicator isValid={isCniValid} text="Le NIN doit faire 13 ou 14 chiffres" />}
        </View>

        <View style={styles.inputGroup}>
          <PhoneInput
            ref={phoneInput}
            value={phoneNumber}
            defaultCode="SN"
            layout="first"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={setFormattedValue}
            withShadow
            autoFocus
          />
          {formattedValue.length > 2 && <ValidationIndicator isValid={isPhoneValid} text="Le numéro de téléphone doit être valide" />}
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.criteriaContainer}>
            <ValidationIndicator isValid={passwordCriteria.length} text="Au moins 10 caractères" />
            <ValidationIndicator isValid={passwordCriteria.uppercase} text="Au moins une majuscule" />
            <ValidationIndicator isValid={passwordCriteria.number} text="Au moins un chiffre" />
            <ValidationIndicator isValid={passwordCriteria.specialChar} text="Au moins un caractère spécial" />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f4f8' },
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1e3a5f', marginBottom: 30, textAlign: 'center' },
  inputGroup: { marginBottom: 15 },
  input: { backgroundColor: '#ffffff', paddingHorizontal: 15, borderRadius: 10, borderWidth: 1, borderColor: '#d1d9e6', fontSize: 16, color: '#1e3a5f', height: 50 },
  criteriaContainer: { marginTop: 8, paddingLeft: 5 },
  validationText: { marginTop: 5, paddingLeft: 5, fontSize: 12 },
  button: { backgroundColor: '#007bff', paddingVertical: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
  buttonDisabled: { backgroundColor: '#a0c8ff' },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: '600' },
  loginText: { marginTop: 20, textAlign: 'center', color: '#007bff', fontWeight: '600' },
});

export default SignUpScreen;
