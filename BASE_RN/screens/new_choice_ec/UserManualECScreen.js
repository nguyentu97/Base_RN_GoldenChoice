import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'

export default class UserManualECScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={styles._bg}
                source={require('../../assets/images/img_bg_newchoice.png')}>
                <View style={styles._container}>
                    <Text style={[Theme.fonts.quicksandbold15, {
                        textAlign: "center",
                        marginTop: 41,
                        color: Theme.colors.pink
                    }]}>{I18n.t('user_manual_EC')}</Text>
                    <TouchableOpacity style={styles._buttom}
                        onPress={() => {
                            NavigationUtil.goBack()
                        }}>
                        <Text style={[styles._textButton, Theme.fonts.quicksandbold15, { color: Theme.colors.white }]}>{I18n.t('back')}</Text>
                    </TouchableOpacity>

                </View>
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
    _container: {
        width: "95%",
        height: "90%",
        backgroundColor: Theme.colors.white,
        borderRadius: 15,
        shadowColor: Theme.colors.pink,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center"
    },
    _buttom: {
        width: 300,
        height: 50,
        backgroundColor: Theme.colors.pink1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 34,
    },
    _textButton: {
        marginVertical: 13,
        color: Theme.colors.white,
    },
})
