import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput, ScrollView, ImageBackground
} from 'react-native'
import * as Theme from '../../constants/Theme'
import * as Icon from '@expo/vector-icons'
import { KeyboardAvoidingView } from 'react-native';
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../constants/Constant';

export default class RegisterComplete extends Component {
    state = {
        checked: true,
    };
    render() {
        return (
            <ImageBackground style={{ flex: 1, alignItems: "center" }} source={require('../../assets/images/img_bg_newchoice.png')} >
                <Image style={styles._logo} source={require('../../assets/images/img_logo2.png')} />
                <KeyboardAvoidingView behavior="padding" enabled >
                    <ScrollView contentContainerStyle={{marginTop: 15}}>
                        <View style={styles._viewRoot}>
                            <Text
                                style={[Theme.fonts.oswaldlight25, {
                                    marginTop: 10,
                                    textAlign: "center",
                                    color: Theme.colors.black4
                                }]}>{I18n.t('complete_info')}</Text>
                            <TouchableOpacity style={styles._addImage}>
                                <Icon.Ionicons name={'ios-add'} size={30} color={Theme.colors.black4} />
                            </TouchableOpacity>
                            <Text style={[Theme.fonts.quicksandbold10, { marginTop: 10 }]}>{I18n.t('profile_picture')}</Text>
                            <View style={[styles._viewTextInput, { marginTop: 10 }]}>
                                <Image
                                    style={[styles._image, { width: 25, height: 21 }]}
                                    source={require('../../assets/images/img_name.png')} />
                                <TextInput
                                    placeholder={'Tên hiển thị'}
                                    style={[styles._textInput, Theme.fonts.quicksandbold15]} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={[styles._image, { width: 23, height: 18 }]}
                                    source={require('../../assets/images/img_Email.png')} />
                                <TextInput
                                    placeholder={'Email'}
                                    style={[styles._textInput, Theme.fonts.quicksandbold15]} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={[styles._image, { width: 21, height: 21 }]}
                                    source={require('../../assets/images/img_phone.png')} />
                                <TextInput
                                    placeholder={'Số điện thoại'}
                                    style={[styles._textInput, Theme.fonts.quicksandbold15]} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={[styles._image, { width: 22, height: 22 }]}
                                    source={require('../../assets/images/img_address.png')} />
                                <TextInput
                                    placeholder={'Địa chỉ'}
                                    style={[styles._textInput, Theme.fonts.quicksandbold15]} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={[styles._image, { width: 31, height: 19 }]}
                                    source={require('../../assets/images/img_code.png')} />
                                <TextInput
                                    placeholder={'Nhập mã người giới thiệu'}
                                    style={[styles._textInput, Theme.fonts.quicksandbold15]} />
                            </View>
                            <View style={{
                                flexDirection: "row",
                                marginTop: 15,
                                width: "100%",
                                marginLeft: 54
                            }}>
                                <TouchableOpacity
                                    style={styles._viewBox}
                                    onPress={() => {
                                        this.setState({ checked: !this.state.checked })
                                    }}>
                                    {this.state.checked &&
                                        <Image style={{
                                            width: 20,
                                            height: 20,
                                            resizeMode: "contain",
                                            tintColor: Theme.colors.pink1
                                        }}
                                            source={require('../../assets/images/img_checked.png')} />}
                                </TouchableOpacity>
                                <View style={{ marginLeft: 23, justifyContent: "center" }}>
                                    <Text style={[Theme.fonts.quicksandbold12]}>{I18n.t('hide_info')}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles._viewButton} onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.SELECT_USER)
                            }}>
                                <Text style={[Theme.fonts.quicksandbold15, { color: Theme.colors.white, fontWeight: "bold" }]}>{I18n.t('update_info')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    _logo: {
        width: 143,
        height: 40,
        resizeMode: "contain",
        marginTop: 25
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
        // flex: 1,
        width: 380,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: Theme.colors.white,
        justifyContent: "center",
        alignItems: "center",
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
        marginBottom: 27,
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
