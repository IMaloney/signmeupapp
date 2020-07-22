import React from 'react';
import { Alert } from 'react-native';
import { Context as StudentContext } from '../context/StudentContext';

export const ClaimedOptions = (name) => {
        const { endTicket, unclaimStudent } = useContext(StudentContext);
        Alert.alert(
            name,
            "",
            [
                {
                    text: "End Ticket",
                    onPress: () => {
                        endTicket();
                        console.log("claimed ticket");
                    }
                },
                {
                    text: "Unclaim Ticket",
                    onPress: () => {
                        unclaimStudent();
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

