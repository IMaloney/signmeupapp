import React from 'react';
import { Alert } from 'react-native';


export const StudentOptions = (name) => {
		Alert.alert(
			name,
			"",
			[
				{
					text: "Claim Ticket",
					onPress: () => console.log("claimed ticket")
				},
				{
					text: "Mark Missing",
					onPress: () => console.log("marked missing")
				},
				{
					text: "Delete Ticket",
					onPress: () => console.log("ticket deleted"),
					style: 'destructive'
				},
				{
			        text: "Cancel",
          			onPress: () => console.log("Cancel Pressed"),
          			style: "cancel"
				}
			]
		);
	};	

