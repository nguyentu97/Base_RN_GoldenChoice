import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Header } from 'react-native-elements';
import NavigationUtil from '../navigation/NavigationUtil';
import { CirclesLoader, PulseLoader, TextLoader, EatBeanLoader, LinesLoader } from 'react-native-indicator';
import * as Icon from '@expo/vector-icons';

import * as theme from '../constants/Theme'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <LinesLoader
                    size={40}
                    color={theme.colors.pink2}
                />
                <View style={{
                    height: 20
                }}></View>
                <TextLoader
                    text="Đang tải" />
            </View>
        );
    }
}

export default Loading;
