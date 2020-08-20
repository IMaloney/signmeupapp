import React, { useContext } from 'react';
// think about flat list --> also, may put pressable in student
// if you are a ta and press on a student, you get more options (mark missng, claim ticket, delete ticket)
import { View, Text, FlatList, Pressable } from 'react-native';
import Student from './Student';
import Cutoff from './Cutoff';
import StudentListHeader from './StudentListHeader';
import StudentContext from '../context/StudentContext';
// for cutoffs, two ways to handle:
	// --> name will be cutoff and time will be null
	// --> cutoff flag passed down
const StudentList = () => {

	const {state} = useContext(StudentContext);
	let count = 1;
	return (
		<View>		
			<FlatList
				ListHeaderComponent={<StudentListHeader />}
				data={state}
				keyExtractor={(student) => student.id}
				renderItem={({item}) => {
					// render student if its not the cutoff, if its the cut off render cutoff
					// <Cutoff />
					return (
						<View>
							<Student 
								number={count++}
								student={item}
							/>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default StudentList;