import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from './include/MyButton';

const Reopen = () => {
	return (
		<View>
			<MyButton name={'Reopen'} color={'green'} onPress={() => console.log('Reopen')}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {

	}
});

export default Reopen;