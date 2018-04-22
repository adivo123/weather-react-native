import  React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Form extends Component
{
	state = {
		city: null
	}

	handleOnPress = () =>
	{
		this.props.toggleView(this.state.city);
	}

	render()
	{
		return(
			<View style={styles.container}>
				<TextInput 
					style={styles.input}
					onChangeText={(text) => this.setState({city: text})}
					placeholder="city..."
					placeholderTextColor="#fff"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={this.handleOnPress}
				>
					<Text style={{ fontSize: 18 }}>Search</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		marginHorizontal: 20
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#55efc4',
		padding: 20,
		marginTop: 20,
	},
	input: {
		height: 40,
		padding: 10,
		marginTop: 200,
		marginHorizontal: 10,
		color: '#fff',
		borderColor: '#55efc4',
		borderBottomWidth: 1,
		backgroundColor: '#1e272e',
		fontSize: 18,
		textAlign: 'center'
	}
});
