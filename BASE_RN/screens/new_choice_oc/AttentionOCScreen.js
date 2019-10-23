import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'
import { TextInput } from 'react-native-gesture-handler'

export default class AttentionOCScreen extends Component {
    state = {
        onClick: 0
    }

    _renderNote() {
        return (
            <View style={styles._viewContext}>
                <View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 19,
                    }}>
                        <Image
                            style={styles._imgWarring}
                            source={require('../../assets/images/img_warring.png')} />
                        <Text style={[Theme.fonts.bold15, {
                            marginLeft: 9,
                            marginTop: 10,
                            color: Theme.colors.pink
                        }]}>{I18n.t('attention')}</Text>
                    </View>
                    <Text style={[styles._colorText, { marginTop: 9, fontSize: 12 }]}>{I18n.t('note')}</Text>
                    <TouchableOpacity onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.USER_MANUAL_OC)
                    }}>
                        <Text style={[Theme.fonts.bold12, {
                            marginTop: 8,
                            color: Theme.colors.pink
                        }]}>{I18n.t('read_guide')}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 30, marginBottom: 30 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 1
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>
                        {I18n.t('understand')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderCheckStatus() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, {
                    textAlign: "center",
                    color: Theme.colors.black2,
                    marginTop: 48
                }]}>{I18n.t('use_medicine_yet')}</Text>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 38 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 4
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('using')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 25, marginBottom: 75 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 2
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>
                        {I18n.t('not_use')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderUse() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, {
                    textAlign: "center",
                    marginTop: 48
                }]}>{I18n.t('how_long_use')}</Text>
                <TextInput
                    placeholder={'00'}
                    style={{
                        paddingLeft: 38,
                        justifyContent: "center",
                        width: 95,
                        height: 35,
                        marginTop: 22,
                        borderWidth: 1,
                        borderColor: Theme.colors.black3,
                    }}
                    maxLength={2}
                // onChangeText={text => onChangeText(text)} 
                />
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 55, marginBottom: 76 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 5
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('next')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderNotUse() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, {
                    textAlign: "center",
                    color: Theme.colors.black2,
                    marginTop: 28
                }]}>{I18n.t('today_periods_first')}</Text>
                <View style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image
                        style={{ width: 14, height: 14, resizeMode: "contain", marginRight: 12 }}
                        source={require('../../assets/images/img_qustion.png')} />
                    <Text style={[Theme.fonts.bold15, {
                        color: Theme.colors.pink,
                    }]}>{I18n.t('what_menstruation')}</Text>
                </View>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 40 }]}
                    onPress={() => {
                        this.setState({
                            // onClick: 4
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('yes')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 15, marginBottom: 38 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 6
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('no')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderTimerDone() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, {
                    marginTop: 20,
                    textAlign: "center"
                }]}>{I18n.t('reminder')}</Text>
                <Image
                    style={styles._imgClock}
                    source={require('../../assets/images/img_clock.png')} />
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 38, marginBottom: 30 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 7
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('ok')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderSetupDone() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, {
                    marginTop: 20,
                    textAlign: "center"
                }]}>{I18n.t('setup_reminder_day')}</Text>
                <Image
                    style={styles._imgSetup}
                    source={require('../../assets/images/img_setup.png')} />
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 43, marginBottom: 28 }]}
                    onPress={() => {
                        this.setState({
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('ok')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderTimer() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, {
                    textAlign: "center",
                    marginTop: 17
                }]}>{I18n.t('timer_periods')}</Text>

                <View style={{
                    marginTop: 45,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-around"
                }}>
                    <Text style={[Theme.fonts.bold15, styles._colorTimer]}>{I18n.t('day')}</Text>
                    <Text style={[Theme.fonts.bold15, styles._colorTimer]}>{I18n.t('month')}</Text>
                    <Text style={[Theme.fonts.bold15, styles._colorTimer]}>{I18n.t('year')}</Text>
                </View>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 86, marginBottom: 28 }]}
                    onPress={() => {
                        this.setState({
                            onClick: 3
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('ok')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderSetAlarm() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, {
                    textAlign: "center",
                    color: Theme.colors.black2,
                    marginTop: 33
                }]}>{I18n.t('optional_settings_system')}</Text>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 45 }]}
                    onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.SETTING_ALARM)
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('optional_settings')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 15, marginBottom: 33 }]}
                    onPress={() => {
                        this.setState({
                            // onClick: 2
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('default_option')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                source={require('../../assets/images/img_bg_newchoice.png')}>
                <View style={{
                    alignItems: "center"
                }}>
                    <Image
                        style={styles._logo}
                        source={require('../../assets/images/img_logo1.png')} />
                    <View style={styles._viewRoot}>
                        {this.state.onClick === 0 && this._renderNote()}
                        {this.state.onClick === 1 && this._renderCheckStatus()}
                        {this.state.onClick === 4 && this._renderUse()}
                        {this.state.onClick === 2 && this._renderNotUse()}
                        {this.state.onClick === 3 && this._renderTimerDone()}
                        {this.state.onClick === 5 && this._renderSetupDone()}
                        {this.state.onClick === 6 && this._renderTimer()}
                        {this.state.onClick === 7 && this._renderSetAlarm()}
                    </View>
                </View>
                <View style={{
                    marginTop: this.state.onClick === 0 ? 35 : this.state.onClick === 1 ? 85 : this.state.onClick === 2 || this.state.onClick == 4 || this.state.onClick == 3 ? 58 : 83,
                    justifyContent: "center",
                    alignItems: this.state.onClick === 0 ? "flex-start" : this.state.onClick === 1 || this.state.onClick === 2 || this.state.onClick == 6 || this.state.onClick == 4 ? "center" : "flex-end"
                }}>
                    <View style={{
                        height: 2,
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
    _viewRoot:
    {
        width: 340,
        marginTop: 18,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: 30,
        alignItems: "center",
        borderRadius: 20,
        shadowColor: Theme.colors.pink,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    _logo: {
        width: 226,
        height: 63,
        resizeMode: "contain",
        marginTop: "30%"
    },
    _viewContext: {
        minHeight: 276,
        alignItems: "center",
    },
    _buttom: {
        width: 300,
        height: 50,
        backgroundColor: Theme.colors.pink1,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    _textButton: {
        color: Theme.colors.white,
    },
    _colorText: {
        color: Theme.colors.black2
    },
    _imgWarring: {
        width: 33,
        height: 28,
        resizeMode: "contain"
    },
    _imgDrank: {
        width: 110,
        height: 119,
        marginTop: 20,
        resizeMode: "contain",
    },
    _imgClock: {
        width: 112,
        height: 87,
        marginTop: 21,
        resizeMode: "contain",
    },
    _imgSetup: {
        width: 87,
        height: 78,
        marginTop: 18,
        resizeMode: "contain",
    },
    _colorTimer: {
        color: Theme.colors.red
    }
})
