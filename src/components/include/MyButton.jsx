import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const MyButton = ({name, color, onPress}) => {
	return(
		<View style={styles.container}>
			<TouchableOpacity
			onPress={onPress}
			>	
				<Text style={{...styles.text, color:color}}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginVertical: 10
	},
	text: {
		fontSize: 25
	}
});

export default MyButton;