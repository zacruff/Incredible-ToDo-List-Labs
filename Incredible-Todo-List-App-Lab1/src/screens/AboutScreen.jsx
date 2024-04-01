import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'react-native'
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
        <View>
          <Text>About Us</Text>
          <Button
            title='Go to Home'
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
          <StatusBar style='auto' />
        </View>
    </MainLayout>
  )
}

export default AboutScreen