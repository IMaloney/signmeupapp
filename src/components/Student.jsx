import React, { useContext  } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { StudentOptions } from './alerts/StudentOptions';
import { ClaimedOptions } from './alerts/ClaimedOptions';
import StudentContext from '../context/StudentContext';
import * as Haptics from 'expo-haptics'; 

// time is always changing, its the time you signed up relative
// so like, just now, 1 minute ago, 5 minutes ago, etc.
const Student = ({ number, student }) => {
	const { claimStudent, markMissing, deleteTicket, endTicket, unclaimStudent } = useContext(StudentContext);
	let s = styles.containerNormal;
	let	funcs = { claimStudent, markMissing, deleteTicket };
	if (student.claimed === 1) {
		s = styles.containerClaimed;
		funcs = { endTicket, unclaimStudent };
	} else if (student.missing === 1) {
		s = styles.containerMissing;
	} 
	return(
		<View>
			<TouchableWithoutFeedback
				delayLongPress={400}
				onLongPress={ async () => {
					try {
						// if this errors out you should let it happen anyway
						await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
						(student.claimed === 1) ? ClaimedOptions(student, funcs) : StudentOptions(student, funcs);
					} catch(err) {
						console.log(err);
					}
				}}
			>
				<View style={s}>
					<View style={styles.no}>
						<Text style={styles.text}>{number}</Text>
					</View>
					<View style={styles.name}>
						<Text style={styles.text}>{student.name}</Text>
					</View>
					<View style={styles.time}>
						<Text style={styles.text}>{student.time}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>		
	);
};

const styles = StyleSheet.create({
	// VERY temporary style fix
	containerNormal: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#dedede'		
	 	 // #e3e3e3
	},
	containerMissing: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#dedede',
		backgroundColor: '#f7b532'
	},
	containerClaimed: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#dedede',
		backgroundColor: 'green'
	},
	no: {
		flex: 1.5
	},
	name: {
		flex: 5,
		borderLeftColor: '#dedede',
		borderRightColor: '#dedede',
	},
	time: {
		flex: 3.5
	},
	text: {
		fontSize: 17,
		marginLeft: 5,
		marginVertical: 7.5
	}
});

export default Student;