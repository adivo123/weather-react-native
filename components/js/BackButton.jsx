import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = props => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.toggleView}
        >
            <Text style={{color: '#55efc4', fontSize: 28}}>Back</Text>
        </TouchableOpacity>
    );
}

export default BackButton;

const styles = StyleSheet.create({
    button: {
		marginBottom: 100,
		padding: 20,
		marginTop: 20,
	}
});
