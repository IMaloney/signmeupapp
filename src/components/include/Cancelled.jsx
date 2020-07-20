import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Cancelled = () => {
	return (
	<View style={styles.container}>
		<MaterialIcons name="cancel" style={styles.img} />
		<Text style={styles.text}>Cancelled</Text>
	</View>
	);

};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ed1f1c',
		flexDirection: 'row',
		marginTop: 25,
		borderRadius: 10,
		paddingTop: 5,
		paddingHorizontal: 8
	},
	img: {
		marginHorizontal: 2,
		fontSize:17,
		marginTop: 4,
		color: 'white',
	},
	text: {
		color: 'white',
		fontSize: 20,
		marginHorizontal: 2,
		fontWeight: '500'
	}
});
export default Cancelled;