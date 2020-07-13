import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StudentListHeader from './StudentListHeader';


const NoSignups = () => {
	return (
		<View>
			<StudentListHeader />
			<View style={styles.container}>
				<Text style={styles.text}>No signups to show.</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '75%'
	}, 
	text: {
		fontSize: 20
	}
});


export default NoSignups; 