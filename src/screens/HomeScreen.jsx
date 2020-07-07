import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import QueueList from '../components/QueueList';
import Header from '../components/Header';
import NoSignups from '../components/NoSignups';
import NewQueue from '../components/NewQueue';

const courses = [
    {
        id: '0',
        name: 'test',
        tag: 'cs0160',
        color: '#ff6f7d',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 80,
        course: "introduction to data structures and algorithms"
    },
    {
        id: '1',
        name: 'cs32',
        tag: 'cs0320',
        color: '#ffe047',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 10,
        course: "Poop"
    },
    {
        id: '2',
        name: 'cs 33',
        tag: 'cs0330',
        color: '#728cff',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 1,
        course: "Whad up"
    }

];
// login will check if they are a ta, if they are a ta, then it will also tell
// what couse they are allowed to make a queue for
// scroll view needs to be fixed so that the header scrolls too
const HomeScreen = () => {
    // moved header to quelist and no signups 
    const n = "Ian";
	return (
		<SafeAreaView>
            {courses.length === 0 ? <NoSignups name={n}/> : <QueueList courses={courses} user={n}/>}
        </SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default HomeScreen;