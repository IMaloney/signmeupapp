import React from 'react';
import { Alert } from 'react-native';
import { Context as StudentContext } from '../context/StudentContext';

export const StudentOptions = (name, missing) => {
	const { claimStudent, markMissing, deleteTicket } = useContext(StudentContext);
	const missingPhrase = (missing === 1) ? "Unmark Missing" : "Mark Missing";
		Alert.alert(
			name,
			"",
			[
				{
					text: "Claim Ticket",
					onPress: () => {
						claimStudent();
						console.log("claimed ticket");
					}
				},
				{
					text: missingPhrase,
					onPress: () => {
						markMissing();
						console.log("marked missing");
					}
				},
				{
					text: "Delete Ticket",
					onPress: () => {
						deleteTicket();
						console.log("ticket deleted");
					},
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

