import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { StudentOptions } from './alerts/StudentOptions';
import * as Haptics from 'expo-haptics'; 

// time is always changing, its the time you signed up relative
// so like, just now, 1 minute ago, 5 minutes ago, etc.
const Student = ({ number, name, time }) => {
	

	return(
		<View>
			<TouchableWithoutFeedback
				delayLongPress={400}
				onLongPress={ async () => {
					try {
						await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
						StudentOptions(name);
					} catch(err) {
						console.log(err);
					}
				}}
			>
				<View style={styles.container}>
					<View style={styles.no}>
						<Text style={styles.text}>{number}</Text>
					</View>
					<View style={styles.name}>
						<Text style={styles.text}>{name}</Text>
					</View>
					<View style={styles.time}>
						<Text style={styles.text}>{time}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>		
	);
};

// no cap, kind of tight
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#dedede'
		 // #e3e3e3
	},
	no: {
		flex: 1.5
	},
	name: {
		flex: 4.75,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderLeftColor: '#dedede',
		borderRightColor: '#dedede',
	},
	time: {
		flex: 3.75
	},
	text: {
		fontSize: 20,
		marginLeft: 5,
		marginVertical: 7.5
	}
});

export default Student;