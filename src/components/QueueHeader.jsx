import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import EndsAt from './EndsAt';

// probably should make small functions for updating plural, etc. 
const QueueHeader = ({name, waiting, tag, end, location }) => {
	const ticketPlural = (waiting === 1) ? 'ticket' : 'tickets';
	return (
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

export default QueueHeader;

