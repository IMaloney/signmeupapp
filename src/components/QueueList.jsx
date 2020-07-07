import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import QueueCard from './QueueCard';
import Header from './Header';
import NewQueue from './NewQueue';

const QueueList = ({ courses, navigation, user }) => {
	// may pass more info into the queuecard, right now it only needs to know about the name and color
	
	return (
		<View style={styles.queues}>
			<FlatList
				ListHeaderComponent={<Header name={user} />}
				ListFooterComponent={<NewQueue />}
				data={courses}
				keyExtractor={courses.id}
				renderItem={({item}) => {
					return(
						<TouchableOpacity
							onPress={() => navigation.navigate('Queue', {course: item})}
						>
							<QueueCard 
								name={item.name} 
								color={item.color}
								tag={item.tag}
								location={item.location}
								end={item.end}
								course={item.course}
								waiting={item.waiting}
							/>
						</TouchableOpacity>
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

export default withNavigation(QueueList);

