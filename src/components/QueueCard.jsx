import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, EvilIcons } from '@expo/vector-icons';
import { getPattern } from '../helpers/pattern';
import EndsAt from './include/EndsAt';

// CONSTANTS
const width = Math.floor(Dimensions.get('window').width * .90);

// need to manage state here
// make a helper for determining whether a queue has ended or not

const QueueCard = ({name, tag, location, waiting, course, end}) => {
	// move this out at some point
  const ticketPlural = (waiting === 1) ? 'ticket' : 'tickets'; 
  return (
		<View style={styles.card}>
      <View style={styles.bg} >
          { getPattern(name, 0) }
      </View>
			<View style={styles.cardInfo}>
				<Text style={styles.header}>{tag} · {name}</Text>
				<Text style={styles.title} numberOfLines={1}>{course}</Text>
				<View style={styles.info}>
					<Entypo name="location-pin" style={styles.img}/>        
					<Text style={styles.subtext}>{location}</Text>
					<MaterialIcons name='people' style={styles.img}/>
					<Text style={styles.subtext}>{waiting} {ticketPlural }</Text>
				</View>
			</View>
  			<View style={styles.time}>
          <View style ={{...styles.cardInfo2, ...styles.cardInfo}}>
            <EndsAt time={end} font={{fontSize:17}} margin={{marginBottom:0}}/>
          </View>
  			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  card: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    width: Math.floor(Dimensions.get('window').width * .90),
    borderColor: '#999897',
    marginBottom: 20,
    // borderRadius: 10
  },
  // changed border radius to accomodate for svg image not playing well with view
  time: {
    backgroundColor: '#ebebeb',
    height: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#999897'
  },
  bg: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#999897'
  },
  cardInfo: {
    marginHorizontal: 20
  },
  cardInfo2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: '500'
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 10,
  },
  info: {
    flexDirection: 'row',
    marginBottom: 10
  },
  img: {
    alignSelf: 'center',
    fontSize: 17
  },
  subtext: {
    fontSize: 17,
    paddingHorizontal: 5
  }
});

export default QueueCard;