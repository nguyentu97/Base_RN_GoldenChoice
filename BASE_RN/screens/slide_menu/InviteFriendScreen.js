import React, { Component } from 'react'
import {
    Text, StyleSheet, View, Image,
    TouchableOpacity,
    TextInput, ScrollView, ImageBackground
} from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import { KeyboardAvoidingView } from 'react-native';
import { SCREEN_ROUTER } from '../../constants/Constant';

export default class InviteFriendScreen extends Component {
    render() {
        return (
            <ImageBackground style={{ flex: 1, alignItems: "center" }} source={require('../../assets/images/img_bg_newchoice.png')} >
                <Image style={styles._logo} source={require('../../assets/images/img_logo2.png')} />
                <View style={styles._viewRoot}>
                    <Text
                        style={[Theme.fonts.bold25, {
                            marginTop: 15,
                            textAlign: "center",
                            color: Theme.colors.black4
                        }]}>{I18n.t('invite_fr')}</Text>
                    <Image style={{
                        width: 16,
                        height: 16,
                        position: "absolute",
                        top: 11,
                        right: 12,
                        resizeMode: "contain"
                    }}
                        source={require('../../assets/images/img_close.png')} />
                    <Image style={{
                        marginTop: 23,
                        width: 213,
                        height: 223,
                        resizeMode: "contain"
                    }}
                        source={require('../../assets/images/img_invite_fr.png')} />
                    <Text style={[Theme.fonts.regular12, {
                        textAlign: "center",
                        marginTop: 37
                    }]}>{I18n.t('text_invite')}</Text>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 41,
                    }}>
                        <View style={{
                            width: 189,
                            height: 50,
                            borderRadius: 25,
                            borderWidth: 1,
                            borderColor: Theme.colors.black3,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text>7ABX52</Text>
                        </View>
                        <TouchableOpacity style={{
                            width: 100,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: Theme.colors.pink1,
                            marginLeft: 11,
                        }}>
                            <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>COPY</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles._viewButton} onPress={() => {
                        // NavigationUtil.navigate(SCREEN_ROUTER.SELECT_USER)
                    }}>
                        <Text style={[Theme.fonts.quicksandbold15, { color: Theme.colors.white, fontWeight: "bold" }]}>{I18n.t('invite_fr_now')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    _logo: {
        width: 143,
        height: 40,
        resizeMode: "contain",
        marginTop: 21
    },
    _addImage: {
        width: 64,
        height: 64,
        marginTop: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#F9D4E4",

    },
    _viewRoot: {
        width: 380,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: Theme.colors.white,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 10,
    },
    _viewTextInput: {
        width: 300,
        height: 50,
        marginTop: 15,
        borderWidth: 1,
        borderColor: Theme.colors.black3,
        backgroundColor: Theme.colors.white,
        borderRadius: 25,
        flexDirection: "row",
    },
    _image: {
        marginTop: 15,
        marginLeft: 16,
        resizeMode: "contain"
    },
    _textInput: {
        marginVertical: 16,
        marginLeft: 16,
        width: "80%",
        color: Theme.colors.black3
    },
    _viewButton: {
        width: 300,
        height: 50,
        marginTop: 15,
        marginBottom: 30,
        backgroundColor: Theme.colors.pink1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    _viewBox: {
        width: 24,
        height: 24,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: Theme.colors.black3,
        justifyContent: "center",
        alignItems: "center"
    },
})
