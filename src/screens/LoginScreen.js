import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { telephoneValidator } from '../helpers/telephoneValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [telephone, setTelephone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const telError = telephoneValidator(telephone.value)
    const passwordError = passwordValidator(password.value)
    if (telError || passwordError) {
      setTelephone({ ...telephone, error: telError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Bonjour.</Header>
      <TextInput
        label="Téléphone"
        returnKeyType="next"
        value={telephone.value}
        onChangeText={(text) => setTelephone({ value: text, error: '' })}
        error={!!telephone.error}
        errorText={telephone.error}
        autoCapitalize="none"
        autoCompleteType="tel"
        keyboardType="phone-pad" // Use "phone-pad" for numeric keyboard
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
      Se connecter
      </Button>
      <View style={styles.row}>
        <Text>Vous n'avez pas encore de compte ?</Text> 
      </View>
      <View style={styles.row}>
      <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Créer !</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})