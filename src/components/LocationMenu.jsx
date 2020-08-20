import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-community/picker';

const LocationMenu = () => {
	// hardcoded for now
	return (
		<Picker>
		<Picker.Item label="Fishbowl" value="FishBowl">
		<Picker.Item label="Moonlab" value="Moonlab">
		</Picker>
	);
};

const styles = StyleSheet.create({

});


export default LocatioMenu;