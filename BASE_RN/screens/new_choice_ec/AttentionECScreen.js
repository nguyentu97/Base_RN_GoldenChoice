import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER, CHECK_NEWCHOICE_EC } from '../../constants/Constant'

export default class AttentionScreen extends Component {
    state = {
        selectedPosition: CHECK_NEWCHOICE_EC.MOBILIZE
    }
    _renderMobilize() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold15, {
                    textAlign: "center",
                    color: Theme.colors.black2,
                    marginTop: 37
                }]}>{I18n.t('thank_select')}</Text>
                <Image
                    style={styles._imgflower}
                    source={require('../../assets/images/img_flower.png')} />
                <Text style={[Theme.fonts.bold12, { color: Theme.colors.pink, textAlign: "center", marginTop: 19 }]}>{I18n.t('rings_again')}</Text>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 20, marginBottom: 50 }]}
                    onPress={() => {
                        this.setState({
                            selectedPosition: CHECK_NEWCHOICE_EC.NOTE
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>
                        {I18n.t('not_drink')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
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
                        NavigationUtil.navigate(SCREEN_ROUTER.USER_MANUAL_EC)
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
                            selectedPosition: CHECK_NEWCHOICE_EC.CHECK_STATUS
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>
                        {I18n.t('understand')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderCheckStaus() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, {
                    textAlign: "center",
                    color: Theme.colors.black2,
                    marginTop: 48
                }]}>{I18n.t('drink_medicine_yet')}</Text>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 24 }]}
                    onPress={() => {
                        this.setState({
                            selectedPosition: CHECK_NEWCHOICE_EC.DRANK
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('drink_one')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 15, marginBottom: 58 }]}
                    onPress={() => {
                        this.setState({
                            selectedPosition: CHECK_NEWCHOICE_EC.NOT_DRANK
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>
                        {I18n.t('not_drink')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderDrink() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, {
                    textAlign: "center",
                    marginTop: 47
                }]}>{I18n.t('time_drink')}</Text>

                <View style={{
                    marginTop: 31,
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-around"
                }}>
                    <Text style={[Theme.fonts.bold15, { color: Theme.colors.red }]}>{I18n.t('day')}</Text>
                    <Text style={Theme.fonts.bold15, styles._colorText}>{I18n.t('hours')}</Text>
                    <Text style={Theme.fonts.bold15, styles._colorText}>{I18n.t('minute')}</Text>
                    <Text style={Theme.fonts.bold15, styles._colorText}>{I18n.t('minute')}</Text>
                    <Text style={Theme.fonts.bold15, styles._colorText}>{I18n.t('time')}</Text>
                </View>
                <TouchableOpacity
                    style={[styles._buttom, {
                        marginTop: 86,
                        marginBottom: 28
                    }]}
                    onPress={() => {
                        this.setState({
                            selectedPosition: CHECK_NEWCHOICE_EC.SET_TIME
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('ok')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderNotDrink() {
        return (
            <View style={styles._viewContext}>
                <Text style={[Theme.fonts.bold16, styles._colorText, { marginTop: 31 }]}>
                    {I18n.t('drink_first')}
                </Text>
                <Image
                    style={styles._imgDrank}
                    source={require('../../assets/images/img_drank.png')} />

                <TouchableOpacity
                    style={[styles._buttom, { marginTop: 28, marginBottom: 41 }]}
                    onPress={() => {
                        this.setState({
                            selectedPosition: CHECK_NEWCHOICE_EC.SET_TIME
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('drank')}</Text>
                </TouchableOpacity>
            </View>)

    }
    _renderSetTime() {
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
                            selectedPosition: CHECK_NEWCHOICE_EC.SET_REMINDER
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton]}>{I18n.t('ok')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderSetReminder() {
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
                            // selectedPosition: 2
                        })
                    }}>
                    <Text style={[Theme.fonts.bold15, styles._textButton, { textAlign: "center" }]}>{I18n.t('default_option')}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderSelectedPosition = (position) => {
        switch (position) {
            case CHECK_NEWCHOICE_EC.MOBILIZE: {
                return (
                    this._renderMobilize()
                )
                break
            }
            case CHECK_NEWCHOICE_EC.NOTE: {
                return (
                    this._renderNote()
                )
                break
            }
            case CHECK_NEWCHOICE_EC.CHECK_STATUS: {
                return (
                    this._renderCheckStaus()
                )
                break
            }
            case CHECK_NEWCHOICE_EC.DRANK: {
                return (
                    this._renderDrink()
                )
                break
            }
            case CHECK_NEWCHOICE_EC.NOT_DRANK: {
                return (
                    this._renderNotDrink()
                )
                break
            }
            case CHECK_NEWCHOICE_EC.SET_TIME: {
                return (
                    this._renderSetTime()
                )
                break

            }
            case CHECK_NEWCHOICE_EC.SET_REMINDER: {
                return (
                    this._renderSetReminder()
                )
                break
            }
        }
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
                    alignItems: "center",
                    paddingTop: this.state.selectedPosition == CHECK_NEWCHOICE_EC.MOBILIZE ? 100 : 0
                }}>
                    {this.state.selectedPosition != CHECK_NEWCHOICE_EC.MOBILIZE && <Image
                        style={styles._logo}
                        source={require('../../assets/images/img_logo1.png')} />}
                    <View style={styles._viewRoot}>
                        {this.renderSelectedPosition(this.state.selectedPosition)}
                    </View>
                </View>
                <View style={{
                    marginTop: this.state.selectedPosition === CHECK_NEWCHOICE_EC.MOBILIZE ? 50 : this.state.selectedPosition === CHECK_NEWCHOICE_EC.NOTE ? 31 : this.state.selectedPosition === CHECK_NEWCHOICE_EC.CHECK_STATUS || this.state.selectedPosition == CHECK_NEWCHOICE_EC.SET_TIME || this.state.selectedPosition == CHECK_NEWCHOICE_EC.DRANK || this.state.selectedPosition == CHECK_NEWCHOICE_EC.NOT_DRANK ? 58 : this.state.selectedPosition == CHECK_NEWCHOICE_EC.SET_REMINDER ? 50 : 86,
                    justifyContent: "center",
                    alignItems: this.state.selectedPosition === CHECK_NEWCHOICE_EC.MOBILIZE || 
                    this.state.selectedPosition === CHECK_NEWCHOICE_EC.NOTE ? "flex-start" : this.state.selectedPosition === CHECK_NEWCHOICE_EC.DRANK || 
                    this.state.selectedPosition == CHECK_NEWCHOICE_EC.CHECK_STATUS || 
                    this.state.selectedPosition == CHECK_NEWCHOICE_EC.NOT_DRANK ? "center" : "flex-end"
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
        width: 380,
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
    _imgflower: {
        width: 154,
        height: 113,
        marginTop: 20,
        resizeMode: "contain",
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
})
