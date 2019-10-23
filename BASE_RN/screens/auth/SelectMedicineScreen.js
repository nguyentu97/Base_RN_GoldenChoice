import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'

export default class SelectMedicineScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                source={require('../../assets/images/img_bg_newchoice.png')}>
                <View style={{ alignItems: "center", paddingTop: 40 }}>
                    <Image style={styles._logo} source={require('../../assets/images/img_logo1.png')} />
                    <Text style={[Theme.fonts.quicksandbold15, {
                        color: Theme.colors.pink,
                        marginTop: 40,
                        textAlign: "center"
                    }]}>{I18n.t('choose_medicine')}</Text>
                    <View style={{ flexDirection: "row", marginTop: 40 }}>
                        <View style={{ alignItems: "center", paddingRight: 20, marginRight: 60 }}>
                            <TouchableOpacity
                                style={styles._viewButton}
                                onPress={() => {
                                    NavigationUtil.navigate(SCREEN_ROUTER.ATTENTIONEC)
                                }}>
                                <Image style={styles._image} source={require('../../assets/images/img_medicines.png')} />
                            </TouchableOpacity>
                            <Text style={[styles._textNewChoice, Theme.fonts.quicksandbold15]}>{I18n.t('newchoice_ec')}{'\n'}{<Text style={{ fontSize: 12 }}>{I18n.t('emergency_medicine')}</Text>}</Text>
                            <Image style={styles._img_question} source={require('../../assets/images/img_qustion.png')} />
                        </View>
                        <View style={{ alignItems: "center", paddingRight: 8 }}>
                            <TouchableOpacity
                                style={styles._viewButton}
                                onPress={() => {
                                    NavigationUtil.navigate(SCREEN_ROUTER.ATTENTIONOC)
                                }}>
                                <Image style={styles._image} source={require('../../assets/images/img_drink_medicine.png')} />
                            </TouchableOpacity>
                            <Text style={[styles._textNewChoice, Theme.fonts.quicksandbold15]}>{I18n.t('newchoice')}{'\n'}{<Text style={{ fontSize: 12 }}>{I18n.t('daily_medicine')}</Text>}</Text>
                            <Image style={styles._img_question} source={require('../../assets/images/img_qustion.png')} />
                        </View>
                    </View>
                </View>
                <View style={{
                    position: "absolute",
                    bottom: 65,
                    justifyContent: "center"
                }}>
                    <View style={{
                        height: 1,
                        width: 246,
                        backgroundColor: Theme.colors.pink2
                    }} />
                    <View style={{
                        width: 12,
                        height: 12,
                        borderRadius: 20,
                        backgroundColor: Theme.colors.pink2,
                        position: "absolute"
                    }} />
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
    _img_question: {
        position: "absolute",
        bottom: 35,
        right: 0,
        width: 12,
        height: 11,
        resizeMode: "contain",
        tintColor: Theme.colors.pink2
    },
    _textNewChoice: {
        marginTop: 40,
        textAlign: "center",
        color: Theme.colors.pink2,
    },
})
