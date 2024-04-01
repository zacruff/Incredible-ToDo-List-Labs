import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'react-native'
import MainLayout from '../layouts/MainLayout';

function HomeScreen ({ navigation }) {
    return (
        <MainLayout>
            <View>
                <Text>Welcome!</Text>
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

export default HomeScreen