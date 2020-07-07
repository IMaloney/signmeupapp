import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const QueueScreen = ({ navigation }) => {
	const course = navigation.getParam('course');
	console.log(course);
	return (
		<SafeAreaView>
			<Text>Queue Screen</Text>
		</SafeAreaView>
	);
};


export default QueueScreen;