import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [telephone, setTelephone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const telephoneError = telephoneValidator(telephone.value)
    const passwordError = passwordValidator(password.value)
    if (telephoneError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setTelephone({ ...telephone, error: telephoneError })
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
      <Header>Bienvenu.</Header>
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Next
      </Button>
      <View style={styles.row}>
        <Text>I already have an account !</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})