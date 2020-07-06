import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NoSignups = () => {
    return (
        <View style={styles.header}>
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