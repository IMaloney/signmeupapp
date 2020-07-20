import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentListHeader = () => {
	return (
		<View style={styles.container}>
			<View style={styles.no}>
				<Text style={styles.text} >No.</Text>
			</View>
			<View style={styles.name}>
				<Text style={styles.text} >Name(s)</Text>
			</View>
			<View style={styles.time}>
				<Text style={styles.text} >Time</Text>				
			</View>						
		</View>
	);
};

// move styles to their own file
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#dedede'
		 // e3e3e3
	},
	no: {
		flex: 1.5
	},
	name: {
		flex: 5,
		// borderLeftWidth: 1,
		// borderRightWidth: 1,
		borderLeftColor: '#dedede',
		borderRightColor: '#dedede',
	},
	time: {
		flex: 3.5
	},
	text: {
		fontWeight: 'bold',
		fontSize: 17,
		// either 5 or 10
		marginLeft: 5,
		marginVertical: 5
	}
});


export default StudentListHeader;