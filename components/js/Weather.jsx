import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { iconList } from './Icons';
import BackButton from './BackButton';

const Weather = ({ data, ...props }) => {	
	const error = data.message;

	if(error)
	{
		return (
			<View style={styles.container}>
				<Text style={styles.error}>{data.message}</Text>
				<BackButton toggleView={props.toggleView} />
			</View>
		);
	}
	else
	{
		return (
			<View style={styles.container}>
				<Text style={styles.temprature}>{ data.main.temp } ºC</Text>
				<Text style={styles.location}>{ data.name }, { data.sys.country }</Text>
				<Image style={{ marginTop: 40 }} source={iconList[data.weather[0].icon]} />
				<BackButton toggleView={props.toggleView} />
			</View>
		);
	}
}

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 40
	},
	temprature: {
		color: '#55efc4',
		fontSize: 60
	},
	location: {
		color: '#55efc4',
		textAlign: 'center',
		marginTop: 10,
		fontSize: 16
	},
	error: {
		color: 'red',
		fontSize: 24
	}
});