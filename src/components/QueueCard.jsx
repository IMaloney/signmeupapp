import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


// make the width of the element a percentage of the screen width (might look weird on bigger devices)
// const width = Math.floor(Dimensions.get('window').width * .90);
// console.log(typeof width);
// console.log(width);

// CONSTANTS

// touch opacity included in here 
const QueueCard = ({name, color, tag, location, waiting, course, end}) => {
	const ticketPlural = (waiting === 1) ? 'ticket' : 'tickets'; 
  return (
		<View style={styles.card}>
			<View style={{...styles.bg, backgroundColor:color}} />
			<View style={styles.cardInfo}>
				<Text style={styles.header}>{tag} · {name}</Text>
				<Text style={styles.title} numberOfLines={1}>{course}</Text>
				<View style={styles.info}>
					<Entypo name="location-pin" style={styles.img}/>        
					<Text style={{...styles.subtext, paddingHorizontal: 5}}>{location}</Text>
					<MaterialIcons name='people' style={styles.img}/>
					<Text style={{...styles.subtext, paddingLeft: 5}}>{waiting} {ticketPlural }</Text>
				</View>
			</View>
  			<View style={styles.time}>
          <View style ={{...styles.cardInfo2, ...styles.cardInfo}}>
            <MaterialCommunityIcons name='cancel' style={styles.img}/>
            <Text style={{...styles.subtext, paddingLeft: 5}}>Ended at {end}</Text>

          </View>
  			</View>
		</View>
	);
};
// above conditionally render queue ended or not

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    width: Math.floor(Dimensions.get('window').width * .90),
    borderColor: '#999897',
    marginBottom: 20,
    borderRadius: 10
  },
  time: {
    backgroundColor: '#ebebeb',
    height: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
      borderTopWidth: 1,
    borderTopColor: '#999897'
  },
  bg: {
    // default color
    backgroundColor: '#713f85',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 20,
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
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10,
  },
  info: {
    flexDirection: 'row',
  },
  img: {
    alignSelf: 'center',
    fontSize: 17
  },
  subtext: {
    fontSize: 17
  }
});

export default QueueCard;