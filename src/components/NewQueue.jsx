import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

// can customize the button more later
// need to pass in the user id, so you can grab which course the person can make
// a queue for


// @react-native-community/picker
// make ew queue a button in the top?

const NewQueue = ({ navigation }) => {
    return(
        <View style={styles.container}>
        	<TouchableOpacity
        		style={styles.button}
        		onPress={() => navigation.navigate('NewQueue')}
        	>
        		<Entypo name="plus" style={styles.text} />
        		<Text style={{...styles.text, paddingLeft: 5}} >New Queue</Text>
        	</TouchableOpacity>
        </View> 
    );
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center'

	},
	text: {
		color: '#007bff',
		fontSize: 24
	}

});

 export default withNavigation(NewQueue);