import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    AsyncStorage
} from 'react-native'
// import { requestLogin } from '../../constants/Api'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../constants/Constant';
import { requestLogin } from '../../redux/actions'
import { connect } from 'react-redux'
import reactotron from 'reactotron-react-native';
import { showMessages } from '../../component/Alert'
import Loading from '../../component/Loading'
import Error from '../../component/Error'

export class LoginScreen extends Component {

    state = {
        type: 3,
        email: "huyculy211299@gmail.com",
        password: "",
        isLoading: false,
        data: {},
        error: null
    }
    login() {
        if (this.state.email.trim().length == 0 || this.state.password.trim().length == 0) {
            showMessages(I18n.t('notification'), I18n.t('empty_value'))
            return;
        }
        else {
            this.props.requestLogin(
                this.state.type,
                this.state.email.trim(),
                this.state.password.trim(),
            );
        }
    }

    render() {
        const { loginState } = this.props
        if (loginState.isLoading) return <Loading />
        return (
            <ImageBackground style={styles._bg}
                source={require('../../assets/images/img_bg_register.png')}>
                <View style={{
                    alignItems: "center",
                    marginTop: "15%"
                    // marginTop: 80
                }}>
                    <Image style={styles._logo} source={require('../../assets/images/img_logo2.png')} />
                    <Text style={[Theme.fonts.oswaldlight25, styles._textLogin]}>{I18n.t('login')}</Text>
                    <Text style={[Theme.fonts.quicksandbold15, { marginTop: 21, color: Theme.colors.white }]}>{I18n.t('user_pass_wrong')}</Text>
                    <View style={styles._container}>
                        <View style={[styles._viewTextInput, { marginTop: 36 }]}>
                            <Image
                                style={styles._imgIcon}
                                source={require('../../assets/images/img_user.png')} />
                            <TextInput
                                placeholder={'Email'}
                                style={[Theme.fonts.quicksandbold15, styles._textInput]}
                                value={this.state.email}
                                onChangeText={(text) => {
                                    this.setState({
                                        email: text
                                    })
                                }} />
                        </View>
                        <View style={[styles._viewTextInput, { marginTop: 15 }]}>
                            <Image
                                style={styles._imgIcon}
                                source={require('../../assets/images/img_password.png')} />
                            <TextInput
                                secureTextEntry={true}
                                placeholder={'Mật khẩu'}
                                style={[Theme.fonts.quicksandbold15, styles._textInput]}
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    })
                                }} />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 16,
                            alignItems: "center"
                        }}>
                            <Text style={[Theme.fonts.quicksandbold12, { color: Theme.colors.black4 }]}>{I18n.t('forgot_pass')} </Text>
                            <TouchableOpacity>
                                <Text style={[Theme.fonts.quicksandbold15, { color: Theme.colors.orange }]}>{I18n.t('click_here')}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles._viewButton}
                            onPress={() => { this.login() }}>
                            <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>{I18n.t('login')}</Text>
                        </TouchableOpacity>
                        <Text style={[Theme.fonts.quicksandbold12, { marginTop: 15, color: Theme.colors.black3 }]}>{I18n.t('or')}</Text>
                        <View style={{
                            marginTop: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 12,
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
                    marginTop: 47,
                    alignItems: "center"
                }}>
                    <Text style={[Theme.fonts.bold12, { color: Theme.colors.white }]}>{I18n.t('dont_user')} </Text>
                    <TouchableOpacity onPress={() => {
                        NavigationUtil.navigate(SCREEN_ROUTER.REGISTER)
                    }}>
                        <Text style={[Theme.fonts.bold15, { color: Theme.colors.orange }]}>{I18n.t('register')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => ({
    loginState: state.loginReducer
})

const mapDispatchToProps = {
    requestLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

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
        marginTop: 15,
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
