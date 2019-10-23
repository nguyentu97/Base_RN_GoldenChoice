import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'

export default class SettingAlarmScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    width: 414,
                    height: 86,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={[Theme.fonts.oswaldlight25, {
                        color: Theme.colors.black4,
                    }]}>{I18n.t('setting_alarm')}</Text>
                    <TouchableOpacity
                        style={{
                            width: 30,
                            height: 30,
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            right: 27,
                        }}
                        onPress={() => {
                            NavigationUtil.goBack()
                        }}
                    >
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
                        <TouchableOpacity>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('on_off')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('custom_alarm')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('timezone')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[Theme.fonts.bold12, styles._textContent]}>{I18n.t('select_sound')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
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
        marginTop: 50
    }
})
