import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput, ImageBackground
} from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'

export default class RegisterScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles._bg}
                source={require('../../assets/images/img_bg_register.png')}>
                <View style={{
                    alignItems: "center",
                    marginTop: "1%"
                    // marginTop: 10
                }}>
                    <Image style={styles._logo} source={require('../../assets/images/img_logo2.png')} />
                    <Text style={[Theme.fonts.oswaldlight25, styles._textLogin]}>{I18n.t('register')}</Text>
                    <Text style={[Theme.fonts.quicksandbold15, { marginTop: 21, color: Theme.colors.white }]}>{I18n.t('email_exists')}</Text>
                    <View style={styles._container}>
                        <View style={[styles._viewTextInput, { marginTop: 24 }]}>
                            <Image
                                style={styles._imgIcon}
                                source={require('../../assets/images/img_user.png')} />
                            <TextInput
                                placeholder={'Email'}
                                style={[Theme.fonts.quicksandbold15, styles._textInput]} />
                        </View>
                        <View style={[styles._viewTextInput, { marginTop: 15 }]}>
                            <Image
                                style={styles._imgIcon}
                                source={require('../../assets/images/img_password.png')} />
                            <TextInput
                                secureTextEntry={true}
                                placeholder={'Mật khẩu'}
                                style={[Theme.fonts.quicksandbold15, styles._textInput]} />
                        </View>
                        <View style={[styles._viewTextInput, { marginTop: 15 }]}>
                            <Image
                                style={styles._imgIcon}
                                source={require('../../assets/images/img_password.png')} />
                            <TextInput
                                secureTextEntry={true}
                                placeholder={'Nhập lại mật khẩu'}
                                style={[Theme.fonts.quicksandbold15, styles._textInput]} />
                        </View>
                        <TouchableOpacity style={styles._viewButton} onPress={() => {
                            NavigationUtil.navigate(SCREEN_ROUTER.REGISTERCOMPLETE)
                        }}>
                            <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>{I18n.t('register')}</Text>
                        </TouchableOpacity>
                        <Text style={[Theme.fonts.quicksandbold12, { marginTop: 15, color: Theme.colors.black3 }]}>{I18n.t('or')}</Text>
                        <View style={{
                            marginTop: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 28,
                        }}>
                            <TouchableOpacity style={styles._viewFB_GG}>
                                <Image style={{
                                    width: 15,
                                    height: 34,
                                    resizeMode: "contain"
                                }}
                                    source={require('../../assets/images/img_fb.png')} />
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 46, width: 0.5, height: 54, backgroundColor: Theme.colors.black4 }} />
                            <TouchableOpacity style={styles._viewFB_GG}>
                                <Image style={{
                                    width: 33,
                                    height: 33,
                                    resizeMode: "contain"
                                }}
                                    source={require('../../assets/images/img_gg.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginTop: 30,
                    alignItems: "center"
                }}>
                    <Text style={[Theme.fonts.quicksandbold12, { color: Theme.colors.white }]}>{I18n.t('have_account')} </Text>
                    <TouchableOpacity onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                    }}>
                        <Text style={[Theme.fonts.quicksandbold15, { color: Theme.colors.orange }]}>{I18n.t('login')}</Text>
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
    _textLogin: {
        textAlign: "center",
        color: Theme.colors.white,
    },
    _logo: {
        marginTop: 6,
        width: 226,
        height: 63,
        resizeMode: "contain",
    },
    _container: {
        backgroundColor: Theme.colors.white,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        borderRadius: 15,
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
        borderWidth: 1,
        borderColor: Theme.colors.black3,
        backgroundColor: Theme.colors.white,
        borderRadius: 25,
        flexDirection: "row",
    },
    _imgIcon: {
        marginVertical: 15,
        marginLeft: 18,
        width: 20,
        height: 20,
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
        marginTop: 26,
        backgroundColor: Theme.colors.pink1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    _viewFB_GG: {
        width: 67,
        height: 67,
        backgroundColor: Theme.colors.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Theme.colors.black4,
    },
})
