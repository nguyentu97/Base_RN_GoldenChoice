import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import * as Theme from '../../constants/Theme'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'
import I18n from '../../i18n/i18n'
import CountDown from 'react-native-countdown-component';

export default class IntroduceScreen extends Component {
    // _countDown = () => {
    //     return (
    //         <CountDown
    //             until={100}
    //             size={20}
    //             onFinish={() => alert('Finished')}
    //             digitStyle={{ backgroundColor: "null" }}
    //             digitTxtStyle={{ color: 'red' }}
    //             timeToShow={['S']}
    //             timeLabels={{ s: '' }}
    //         />
    //     )
    // }
    render() {
        return (
            <ImageBackground style={styles._bg} source={require('../../assets/images/img_bg_newchoice.png')}>
                <View style={{
                    alignItems: "center",
                }}>
                    <Image
                        style={styles._logo}
                        source={require('../../assets/images/img_logo1.png')} />
                    <Text style={[Theme.fonts.bold12, {
                        marginTop: 42,
                        textAlign: "center",
                        color: Theme.colors.pink,
                    }]}> {I18n.t('introduce')}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles._button}
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.LOG_REG)
                    }}>
                    <Text style={[Theme.fonts.quicksandbold15, { color: Theme.colors.white }]}>{I18n.t('next')}</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    _bg: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    _logo: {
        width: 226,
        height: 63,
        resizeMode: "contain",
    },
    _button: {
        width: 300,
        height: 50,
        position: "absolute",
        bottom: 47,
        backgroundColor: Theme.colors.pink1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
})
