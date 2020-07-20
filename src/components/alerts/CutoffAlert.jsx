import React from 'react';
import { Alert } from 'react-native';


export const CutoffAlert = () => {
	console.log("blood");
	Alert.alert(
		"Cutoff",
		"",
		[
			{
				text: 'Cancel',
				onPress: () => console.log('cancelled'),
				style: 'cancel'
			},		
			{
				text: "Delete Cutoff",
				onPress: () => console.log("deleted cutoff"),
				style: 'destructive'
			}
		]
	);
};