import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const NoSignups = () => {
    return (
        <View style={styles.header}>
            <Header name={'Robert'} />
            <Text style={styles.text}>No courses are holding hours right now.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
    },
    text: {
    }
});

export default NoSignups;