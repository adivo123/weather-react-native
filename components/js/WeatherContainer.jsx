import React, { Component } from 'react';
import Weather from './Weather';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const API_KEY = '3101f4573c7deb51ee65061ec2dd46d8';

export default class weatherContainer extends Component
{
    state = {
        data: null,
        isLoading: true
    }

    async componentDidMount()
    {
        let city = this.props.city;
        const apiCall =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await apiCall.json();
        this.setState({ 
            data: data,
            isLoading: false 
        });
    }

    render()
    {
        if(this.state.isLoading)
        {
            return <Text></Text>;
        }
        else
        {
            return <Weather data={this.state.data} toggleView={this.props.toggleView} />;
        }
    }
}
