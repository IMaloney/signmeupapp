import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import QueueCard from './QueueCard';
import NameHeader from './NameHeader';
import NewQueue from './NewQueue';

const QueueCardList = ({ courses, navigation, user }) => {
	// double check courses.id in keyextractor
	return (
		<View >
			<FlatList
				ListHeaderComponent={<NameHeader style={styles.container} name={user} />}
				ListFooterComponent={<NewQueue />}
				data={courses}
				keyExtractor={(course) => course.id}
				renderItem={({item}) => {
					return(
					<View style={styles.container}>
						<TouchableOpacity
							onPress={() => navigation.navigate('Queue', {course: item})}
						>
							<QueueCard 
								name={item.name} 
								tag={item.tag}
								location={item.location}
								end={item.end}
								course={item.course}
								waiting={item.waiting}
							/>
						</TouchableOpacity>
					</View>
					);	
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
	}
});

export default withNavigation(QueueCardList);

