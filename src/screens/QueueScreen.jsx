import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import QueueHeader from '../components/QueueHeader';
import StudentList from '../components/StudentList';
import StudentListHeader from '../components/StudentListHeader';
import { getPattern } from '../helpers/pattern';
import NoSignups from '../components/NoSignups';
import Cutoff from '../components/Cutoff';
import { StudentProvider } from '../context/StudentContext';




const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const QueueScreen = ({ navigation }) => {
	// uses this to make an actual request --> pass just the course id (assuming all that info is in another place)
	const course = navigation.getParam('course');
	// TESTING
	console.log(course.id);
	let studentList = []; 
	if (course.id == 0) {
		console.log("hit");
		studentList = [
			{
			    name: "blood",
			    id: 'daklde2sdS3290',
			    // will need to convert time to make it relative to now
			    time: "now",
			    missing: 0,
			    claimed: 0
			},
			    {
			    name: "crip",
			    id: '328r9ddsahflksa',
			    time: "now",
			    missing: 0,
			    claimed: 0
			},
			    {
			    name: "whad up",
			    id: 'adklhe2kjhfjgjrej',
			    time: "now",
			    missing: 0,
			    claimed: 0
			}
		];	
	} else {
		studentList = [
	{
	    name: "Robert Ian Maloney",
	    id: 'daklde23290',
	    // will need to convert time to make it relative to now
	    time: "10 min. ago",
	    missing: 0,
	    claimed: 1
	},
	    {
	    name: "John Cena",
	    id: '328r9dhflksa',
	    // will need to convert time to make it relative to now
	    time: "15 min. ago",
	    missing: 1,
	    claimed: 0
	},
	    {
	    name: "dat boi",
	    id: 'adklhe2kjrej',
	    // will need to convert time to make it relative to now
	    time: "20 min. ago",
	    missing: 0,
	    claimed: 0
	}
];
	}
	// TESTING
	return (
		<SafeAreaView style={styles.container}>
		<StudentProvider students={studentList}>
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
				{ (studentList.length === 0) ? <NoSignups /> : <StudentList /> }
			</View>
		</StudentProvider>
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