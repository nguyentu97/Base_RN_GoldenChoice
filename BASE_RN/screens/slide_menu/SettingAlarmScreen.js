import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import SwitchToggle from 'react-native-switch-toggle'
import NavigationUtil from '../../navigation/NavigationUtil'

export default class SettingAlarmScreen extends Component {
    state = {
        switchOn: false,
    };
    onPress = () => {
        this.setState({ switchOn: !this.state.switchOn });
    }
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={styles._viewTitle}>
                    <Text style={[Theme.fonts.oswaldlight25, {
                        color: Theme.colors.black4,
                    }]}>{I18n.t('setting_alarm')}</Text>
                    <TouchableOpacity
                        style={styles._select}
                        onPress={() => {
                            NavigationUtil.goBack()
                        }}>
                        <Image style={{
                            width: 17,
                            height: 12,
                            resizeMode: "contain"
                        }}
                            source={require('../../assets/images/img_select.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: Theme.colors.black5
                }}>
                    <View style={{
                        marginLeft: 28,
                    }}>
                        <View style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingRight: 17,
                            marginTop: 40,
                        }}>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('on_off')}</Text>
                            <SwitchToggle
                                containerStyle={{
                                    width: 50,
                                    height: 30,
                                    borderRadius: 30,
                                    padding: 2,
                                }}
                                backgroundColorOn={Theme.colors.green}
                                backgroundColorOff={Theme.colors.black3}
                                circleStyle={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: 27.5,
                                }}
                                switchOn={this.state.switchOn}
                                onPress={this.onPress}
                                circleColorOff={Theme.colors.white}
                                circleColorOn={Theme.colors.white}
                                duration={300}
                            />
                        </View>
                        <TouchableOpacity style={styles._viewText}>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('custom_alarm')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._viewText}>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('timezone')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._viewText}>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('select_sound')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._viewText}>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('select_reminder')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    _textContent: {
        color: Theme.colors.dark2,
    },
    _viewText: {
        marginTop: 50
    },
    _viewTitle: {
        width: 414,
        height: 86,
        alignItems: "center",
        justifyContent: "center"
    },
    _select: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 27,
    },
})
