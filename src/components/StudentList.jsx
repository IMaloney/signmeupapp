import React from 'react';
// think about flat list --> also, may put pressable in student
// if you are a ta and press on a student, you get more options (mark missng, claim ticket, delete ticket)
import { View, Text, FlatList, Pressable } from 'react-native';
import Student from './Student';
import Cutoff from './Cutoff';
import StudentListHeader from './StudentListHeader';
// for cutoffs, two ways to handle:
	// --> name will be cutoff and time will be null
	// --> cutoff flag passed down
const StudentList = ({ students }) => {
	// need to comeup with an id for the student, can't use number since that decrements when people get deleted
	// time might be the best move since in theory that should be unique (or you could make one up)
	// might also need to think about decrementing
	return (
		<View>			
			<FlatList
				ListHeaderComponent={<StudentListHeader />}
				data={students}
				keyExtractor={(student) => student.time}
				renderItem={({item}) => {
					// render student if its not the cutoff, if its the cut off render cutoff
					// <Cutoff />
					return (
						<View>
							<Student 
								number={item.number}
								name={item.name}
								time={item.time}
							/>
						</View>
					);
				}}
			/>
		</View>
	);
};

export default StudentList;