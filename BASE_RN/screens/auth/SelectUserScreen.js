import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'

export default class SelectUserScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                source={require('../../assets/images/img_bg_newchoice.png')}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={styles._logo}
                        source={require('../../assets/images/img_logo1.png')} />
                    <Text style={[Theme.fonts.quicksandbold15, {
                        color: Theme.colors.pink,
                        marginTop: 30,
                        textAlign: "center"
                    }]}>{I18n.t('welcome')}</Text>
                    <View style={{
                        marginTop: 30,
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <View style={{ alignItems: "center", marginRight: 87 }} >
                            <TouchableOpacity
                                style={styles._viewButton}
                                onPress={() => {
                                    NavigationUtil.navigate(SCREEN_ROUTER.SELECT_MEDICINE)
                                }}>
                                <Image style={styles._image} source={require('../../assets/images/img_pharmacist.png')} />
                            </TouchableOpacity>
                            <Text style={[Theme.fonts.quicksandbold12, styles._text]}>{I18n.t('pharmacist')}</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity
                                style={styles._viewButton}
                                onPress={() => {
                                    NavigationUtil.navigate(SCREEN_ROUTER.SELECT_MEDICINE)
                                }}>
                                <Image style={styles._image} source={require('../../assets/images/img_contraceptive_users.png')} />
                            </TouchableOpacity>
                            <Text style={[Theme.fonts.bold12, styles._text]}>{I18n.t('contraceptive_users')}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 10, right: 19, left: 20 }}>
                    <Text style={[Theme.fonts.quicksandbold9, { color: Theme.colors.pink }]}>{I18n.t('comment')}</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    _logo: {
        width: 226,
        height: 63,
        resizeMode: "contain",
    },
    _viewButton: {
        backgroundColor: Theme.colors.white,
        height: 105,
        width: 105,
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Theme.colors.pink,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    _image: {
        width: 64,
        height: 64,
        resizeMode: "contain",
        tintColor: Theme.colors.pink
    },
    _text: {
        textAlign: "center",
        marginTop: 33,
        color: Theme.colors.pink,
    },
})
