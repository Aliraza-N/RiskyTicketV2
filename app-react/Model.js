import { Container } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DEFAULT_LAT = '43.643750';
const DEFAULT_LON = '-79.389983';

const Model = () => {
    const [location, setLocation] = useState([DEFAULT_LAT, DEFAULT_LON]);
    const [currentTime, setCurrentTime] = useState('');
    const [prediction, setPrediction] = useState(-1);

    const updateCurrentTime = () => {
        const now = new Date();
        const formattedTime = `${now.getHours()}:${now.getMinutes()}`;
        setCurrentTime(formattedTime);
    }

    useEffect(() => {
        updateCurrentTime();
    })

    return (
        <Container>
            <Text>
                {currentTime}
            </Text>
        </Container>
    )
}

export default Model;