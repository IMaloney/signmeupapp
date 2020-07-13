import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import QueueCardList from '../components/QueueCardList';
import NameHeader from '../components/NameHeader';
import NoQueues from '../components/NoQueues';
import NewQueue from '../components/NewQueue';

// add refresh control

// tag connected the course (name made up by ta) 
const courses = [
// need to update for long names
    {
        id: '0',
        name: 'TA Hours',
        tag: 'cs0160',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 80,
        course: "introduction to data structures and algorithms"
    },
    {
        id: '1',
        name: 'cs32',
        tag: 'cs0320',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 10,
        course: "Poop"
    },
    {
        id: '2',
        name: 'cs 33',
        tag: 'cs0330',
        location: 'fishbowl',
        end: '2:00pm',
        waiting: 1,
        course: "Intro to Computer Systems"
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
            <StatusBar hidden={false} barStyle='dark-content'/>
            {courses.length === 0 ? <NoQueues name={n}/> : <QueueCardList courses={courses} user={n}/>}
        </SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default HomeScreen;