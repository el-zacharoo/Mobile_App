import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../../components/Button'


export const Details = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
            <Button onPress={() => navigation.navigate('Settings')}>Settings</Button>
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 24,
    },
});
