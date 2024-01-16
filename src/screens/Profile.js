import React , { useEffect } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import CustomHeader from './CustomHeader';

export default function Profile({navigation}) {
    
  return (
    <Background>
      <CustomHeader/>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Se déconnecter
      </Button>
    </Background>
  )
}
