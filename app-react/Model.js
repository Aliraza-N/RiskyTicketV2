import { Container } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DEFAULT_LAT = '43.643750';
const DEFAULT_LON = '-79.389983';

const URL = 'http://127.0.0.1:3000/predict'

const Model = () => {
    const [location, setLocation] = useState([DEFAULT_LAT, DEFAULT_LON]);
    const [currentTime, setCurrentTime] = useState('');
    const [prediction, setPrediction] = useState(-1);

    const updateCurrentTime = () => {
        const now = new Date();
        const formattedTime = `${now.getHours()}:${now.getMinutes()}`;
        setCurrentTime(formattedTime);
    }

    const makePredictionRequest = async () => {
        await fetch(URL, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                time: currentTime,
                lat: location[0],
                lon: location[1]
            })
        })
        .then(resp => resp.json())
        .then(json => {
            setPrediction(json.prediction);
        })
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