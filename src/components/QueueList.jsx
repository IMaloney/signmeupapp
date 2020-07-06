import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import QueueCard from './QueueCard';

const QueueList = ({ courses }) => {
	// may pass more info into the queuecard, right now it only needs to know about the name and color
	return (
		<View style={styles.queues}>
			<FlatList
				data={courses}
				keyExtractor={courses.id}
				renderItem={({item}) => {
					return(
						<QueueCard 
							name={item.name} 
							color={item.color}
							tag={item.tag}
							location={item.location}
							end={item.end}
							course={item.course}
							waiting={item.waiting}
						/>
					);	
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	queues: {
		alignItems: 'center',
		// this might not work with align items as well 
		justifyContent: 'space-around'
	}
});

export default QueueList;

