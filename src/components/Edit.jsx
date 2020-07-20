import React from 'react';
import { View, Text } from 'react-native';
import MyButton from './include/MyButton';
import { ActionAlert } from './alerts/ActionAlert';
import * as Haptics from 'expo-haptics'; 

const Edit = () => {
	return(
		<View>
			<MyButton color='#f0ad41' name='shuffle tickets' onPress={
				async () => {
					try {
						await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
						ActionAlert("Shuffle All Tickets", "Shuffle", () => console.log("shuffle"));
					} catch (err) {
						console.log(err);
					}
			}}

			/>
			<MyButton color='red' name='delete all tickets' onPress={
				async () => {
					try {
						await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
						ActionAlert("Delete All Tickets", "Delete", () => console.log("delete"));
					} catch (err) {
						console.log(err);
					}
				}}
			/>				
		</View>
	);
};

export default Edit;