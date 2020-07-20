import React from 'react';
import { Alert } from 'react-native';


// in helper functions, put delete funtion, import those into this file,
// then put it in onPress
export const ActionAlert = (title, text, func) => {
	Alert.alert(
		title,
		"Are you sure you want to do this?",
		[
			{
				text,
				onPress: () => console.log("delete test"),
				style: 'destructive'
			},
			{
				text: "Cancel",
				onPress: ()=> console.log('delete test cancel'),
				style: 'cancel'
			}
		]
	);
};