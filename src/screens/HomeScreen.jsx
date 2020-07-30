import React, { useContext, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import QueueCardList from '../components/QueueCardList';
import NameHeader from '../components/NameHeader';
import NoQueues from '../components/NoQueues';
import NewQueue from '../components/NewQueue';
import { Context as QueueContext } from '../context/QueueContext';

// add refresh control

// tag connected the course (name made up by ta) 
// login will check if they are a ta, if they are a ta, then it will also tell
// what couse they are allowed to make a queue for
// scroll view needs to be fixed so that the header scrolls too
const HomeScreen = () => {
    // moved header to quelist and no signups 
    const n = "Ian";
    const { state } = useContext(QueueContext);

    // useEffect(() => {

    // }, 
    // []);
    
	return (
		<SafeAreaView>
            <StatusBar hidden={false} barStyle='dark-content'/>
            {state.length === 0 ? <NoQueues name={n}/> : <QueueCardList courses={state} user={n}/>}
        </SafeAreaView>
	);
};

const styles = StyleSheet.create({

});

export default HomeScreen;