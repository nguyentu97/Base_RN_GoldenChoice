import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import * as Theme from '../../constants/Theme'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'
import I18n from '../../i18n/i18n'

export default class Log_RegScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles._bg} source={require('../../assets/images/img_bg_register.png')}>
                <View style={{
                    alignItems: "center",
                }}>
                    <Image
                        style={styles._logo}
                        source={require('../../assets/images/img_logo2.png')} />
                    <Text style={[Theme.fonts.oswaldlight25, {
                        marginTop: 16,
                        textAlign: "center",
                        color: Theme.colors.white,
                    }]}>{I18n.t('app_woman')}</Text>
                    <TouchableOpacity
                        style={[styles._button, { marginTop: 44 }]}
                        onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                        }}>
                        <Text style={[Theme.fonts.bold15, { color: Theme.colors.black3 }]}>{I18n.t('login')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles._button, { marginTop: 15 }]}
                        onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)
                        }}>
                        <Text style={[Theme.fonts.bold15, { color: Theme.colors.black3 }]}>{I18n.t('register')}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles._button, {
                    backgroundColor: Theme.colors.pink1,
                    position: "absolute",
                    bottom: 34,
                    shadowColor: Theme.colors.black,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,

                }]}>
                    <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>{I18n.t('login_guest')}</Text>
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
        backgroundColor: Theme.colors.white,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
})
