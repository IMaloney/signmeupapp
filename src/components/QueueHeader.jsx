import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import EndsAt from './include/EndsAt';
import * as Haptics from 'expo-haptics'; 

// probably should make small functions for updating plural, etc. 
const QueueHeader = ({name, waiting, tag, end, location, navigation }) => {
	const ticketPlural = (waiting === 1) ? 'ticket' : 'tickets';
	// keep track of ended
	const ended = true;
	return (
		<View>
		<TouchableWithoutFeedback
		delayLongPress={400}
		onLongPress={async () => {
			try{
				await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
				navigation.navigate('EditQueue', {ended});
			} catch (err) {
				console.log(err);
			}
		}}
		>
			<View style={styles.container}> 
				<Text style={styles.header}>{tag} · {name}</Text>
				<View style={styles.infoContainer}> 
					<View style={styles.subContainer}>
						<Entypo name="location-pin" style={styles.img}/>        
						<Text style={styles.text}>{location}</Text>
						<MaterialIcons name='people' style={styles.img}/>
						<Text style={styles.text}>{waiting} {ticketPlural }</Text>
					</View>
					<View style={styles.subContainer}>
						<EndsAt time={end} />	
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginVertical: 15
	},
	infoContainer: {
		marginTop: 10,
		alignItems: 'center'
	}, 
	subContainer: {
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	img: {
		alignSelf: 'center',
		fontSize: 20
	},
	text: {
		fontSize: 20,
		paddingHorizontal: 5
	},
	header: {
		fontSize: 30
	}
});

export default withNavigation(QueueHeader);

