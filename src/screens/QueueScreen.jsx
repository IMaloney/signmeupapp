import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import QueueHeader from '../components/QueueHeader';
import StudentList from '../components/StudentList';
import StudentListHeader from '../components/StudentListHeader';
import { getPattern } from '../helpers/pattern';
import NoSignups from '../components/NoSignups';
import Cutoff from '../components/Cutoff';
import { Context } from '../context/StudentContext';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const QueueScreen = ({ navigation }) => {
	// uses this to make an actual request --> pass just the course id (assuming all that info is in another place)
	const course = navigation.getParam('course');
	const { state } = useContext(Context);
	return (
		<SafeAreaView style={styles.container}>
		<Provider>
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
			{ (studentList.length === 0) ? <NoSignups /> : <StudentList students={state} /> }
			<Cutoff />
			</View>
		</Provider>
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