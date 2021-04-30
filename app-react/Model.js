import { Container } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Model = () => {
    const [location, setLocation] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [prediction, setPrediction] = useState(-1);

    return (
        <Container>
            <Text>
                Hello World
            </Text>
        </Container>
    )
}

export default Model;