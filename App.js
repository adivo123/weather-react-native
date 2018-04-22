import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './components/js/Form';
import WeatherContainer from './components/js/WeatherContainer'

export default class App extends React.Component 
{
	state = {
		showForm: true,
		city: undefined
	}

	toggleView = (city) => {
		const { showForm } = this.state;
		this.setState({ 
			showForm: !showForm,
			city: city
		 });
	}

	render()
	{
		return (
			<View style={styles.container}>
				{this.state.showForm ? (
					<Form toggleView={this.toggleView} />
				) : (
					<View style={styles.container}>
						<WeatherContainer city={this.state.city} toggleView={this.toggleView} />
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1e272e',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	heading: {
		fontSize: 48,
		fontWeight: 'bold',
		marginTop: 40,
		color: '#fff'
	}
});
 