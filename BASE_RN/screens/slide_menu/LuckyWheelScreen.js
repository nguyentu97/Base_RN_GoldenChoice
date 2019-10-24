import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'

export default class LuckyWheelScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems: "center"
                }}
                source={require('../../assets/images/test.png')}>
            </ImageBackground>
        )
    }
}
