import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { telephoneValidator } from '../helpers/telephoneValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [tel, setTel] = useState({ value: '', error: '' })

  const sendResetPasswordtel = () => {
    const telError = telephoneValidator(tel.value)
    if (telError) {
      setTel({ ...tel, error: telError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Réinitialisez votre mot de passe.</Header>
      <TextInput
        label="Téléphone"
        returnKeyType="done"
        value={tel.value}
        onChangeText={(text) => setTel({ value: text, error: '' })}
        error={!!tel.error}
        errorText={tel.error}
        autoCapitalize="none"
        autoCompleteType="tel"
        keyboardType="phone-pad" // Use "phone-pad" for numeric keyboard
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordtel}
        style={{ marginTop: 16 }}
      >
        Continuer
      </Button>
    </Background>
  )
}