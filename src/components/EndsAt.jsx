import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const EndsAt = ({ time , font, margin}) => {
	const past = true;
	const ends = (past) ? "Ends" : "Ended";
	return (
		<View style={{...styles.subContainer, ...margin}}>
			{	
	    	 (past) ? <Feather name='clock' style={{...styles.img, ...font}}/> : <MaterialCommunityIcons name='cancel' style={styles.img}/>
			}
	    	<Text style={{...styles.text, ...font}}>{ends} at {time}</Text>
		</View>		
	);
};

styles = StyleSheet.create({
	subContainer: {
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	img: {
		alignSelf: 'center',
		fontSize: 20
	},
	text: {
		fontSize: 20,
		paddingHorizontal: 5
	}	
});
export default EndsAt;