import React from 'react';
import { Alert } from 'react-native';

export const ClaimedOptions = (student, funcs) => {
    Alert.alert(
        student.name,
        "",
        [
            {
                text: "End Ticket",
                onPress: () => {
                    funcs.endTicket(student);
                    console.log("claimed ticket");
                }
            },
            {
                text: "Unclaim Ticket",
                onPress: () => {
                    funcs.unclaimStudent(student);
                    console.log("marked missing");
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

