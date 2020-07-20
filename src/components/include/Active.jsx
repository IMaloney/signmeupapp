import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Active = () => {
	return (
	<View style={styles.container}>
		<FontAwesome5 name="bolt" style={styles.img} />
		<Text style={styles.text}>Active</Text>
	</View>
	);

};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'green',
		flexDirection: 'row',
		marginTop: 25,
		borderRadius: 10,
		paddingTop: 5,
		paddingHorizontal: 10
	},
	img: {
		marginHorizontal: 4,
		fontSize:15,
		marginTop: 5,
		color: 'white',
	},
	text: {
		color: 'white',
		fontSize: 20,
		marginHorizontal: 4,
		fontWeight: '500'
	}
});

export default Active;