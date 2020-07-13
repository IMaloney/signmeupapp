import React from 'react';
import { Alert } from 'react-native';


export const CutoffOptions = () => {
	console.log("blood");
	Alert.alert(
		"Cutoff",
		"",
		[
			{
				text: "Delete Cutoff",
				onPress: () => console.log("deleted cutoff"),
				style: 'destructive'
			},
			{
				text: 'Cancel',
				onPress: () => console.log('cancelled'),
				style: 'cancel'
			}		
		]
	);
};