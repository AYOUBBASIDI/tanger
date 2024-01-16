import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileIcon from '../assets/profile.png';
import DashboardIcon from '../assets/home.png';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%' , position: 'absolute' , top:30 , borderBottom : 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image source={DashboardIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50 }} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={ProfileIcon} style={{ width: 30, height: 30, marginRight: 10 }} />
        </TouchableOpacity>
      </View>
  );
};

export default CustomHeader;
