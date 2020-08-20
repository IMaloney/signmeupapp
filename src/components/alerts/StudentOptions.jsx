import React from 'react';
import { Alert } from 'react-native';

export const StudentOptions = (student, funcs) => {
	const missingPhrase = (student.missing === 1) ? "Unmark Missing" : "Mark Missing";
	Alert.alert(
		student.name,
		"",
		[
			{
				text: "Claim Ticket",
				onPress: () => {
					funcs.claimStudent(student);
					console.log("claimed ticket");
				}
			},
			{
				text: missingPhrase,
				onPress: () => {
					funcs.markMissing(student);
					console.log("marked missing");
				}
			},
			{
				text: "Delete Ticket",
				onPress: () => {
					funcs.deleteTicket(student);
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

