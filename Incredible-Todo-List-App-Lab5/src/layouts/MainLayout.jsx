import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.container}>
                {children}
                <Footer />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;