import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import QueueHeader from '../components/QueueHeader';
import StudentList from '../components/StudentList';
import StudentListHeader from '../components/StudentListHeader';
import { getPattern } from '../helpers/pattern';
import NoSignups from '../components/NoSignups';
import Cutoff from '../components/Cutoff';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const QueueScreen = ({ navigation }) => {
	// uses this to make an actual request
	const course = navigation.getParam('course');

	const studentList = [
	{
		name: "Robert Ian Maloney",
		number: "12",
		// will need to convert time to make it relative to now
		time: "10 min. ago"
	},
		{
		name: "John Cena",
		number: "12",
		// will need to convert time to make it relative to now
		time: "15 min. ago"
	}

	];
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.banner}>
				{ getPattern(course.name, 0) }
			</View>
			<QueueHeader
				name={course.name}
				waiting={course.waiting}
				tag={course.tag}
				end={course.end}
				location={course.location}
				svgPattern={course.svgPattern}
			/>
			<View>
			{ (studentList.length === 0) ? <NoSignups /> : <StudentList students={studentList} /> }
			<Cutoff />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	banner: {
		height: 15
	},
	container: {
		flex: 1,
		height: height,
		width: width
	}
});

export default QueueScreen;