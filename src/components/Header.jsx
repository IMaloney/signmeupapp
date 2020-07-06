import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({name}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Welcome, {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {

        alignItems: 'center',
        marginVertical: 15
    },
    text: {
        fontSize: 35,
        color: '#b3b1b0'
    }
});

export default Header;