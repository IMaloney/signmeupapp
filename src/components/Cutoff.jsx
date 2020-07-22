import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CutoffOptions } from './alerts/CutoffOptions';
import * as Haptics from 'expo-haptics';

const Cutoff = () => {
	return (
		<View>
			<TouchableWithoutFeedback
				delayLongPress={400}
				onLongPress={ async () => {
					try {
						await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
						CutoffOptions();
					} catch (err) {
						console.log(err);
					}
				}}
			>
				<View style={styles.container}>
					<Text style={styles.text}>CUT OFF</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e64b1c',
		alignItems: 'center'
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 7.5
	}
});

export default Cutoff;

// for app logo
// #e08733
// #242a78