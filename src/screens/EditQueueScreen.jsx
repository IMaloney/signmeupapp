import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Cancelled from '../components/include/Cancelled';
import Active from '../components/include/Active';
import Edit from '../components/Edit';
import Reopen from '../components/Reopen';

const EditQueueScreen = ({navigation}) => {
	const ended = navigation.getParam('ended');
	console.log(ended);
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.header}>Edit Queue</Text>			
				{ (ended) ? <Active/> : <Cancelled/> }
			</View>
		{ (ended) ? <Edit/> : <Reopen />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	header: {
		marginTop: 20,
		marginLeft: 15,
		fontSize: 34,
		fontWeight: '500',
	}
});

export default EditQueueScreen;