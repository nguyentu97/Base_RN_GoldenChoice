import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput, ImageBackground, ScrollView
} from 'react-native'
import * as Theme from '../../constants/Theme'
import I18n from '../../i18n/i18n'
import NavigationUtil from '../../navigation/NavigationUtil'
import { SCREEN_ROUTER } from '../../constants/Constant'
import { showMessages } from '../../component/Alert'
import { requestRegister } from '../../redux/actions/index'
import { connect } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native';

class RegisterScreen extends Component {
    state = {
        email: "tund@gmail.com",
        pass: "",
        pass_again: ""
    }
    register() {
        if (this.state.email.trim().length == 0 || this.state.pass.trim().length == 0 || this.state.pass_again.trim().length == 0) {
            showMessages(I18n.t('notification'), I18n.t('empty_value'))
            return;
        }
        else {
            this.props.requestRegister(
                this.state.email.trim(),
                this.state.pass.trim(),
                // this.state.pass_again.trim(),
            );
        }
    }
    render() {
        return (
            <ImageBackground style={styles._bg}
                source={require('../../assets/images/img_bg_register.png')}>
                {/* <View style={{
                    backgroundColor:'red'
                }}> */}
                <Image style={styles._logo} source={require('../../assets/images/img_logo2.png')} />
                <Text style={[Theme.fonts.oswaldlight25, styles._textRegister]}>{I18n.t('register')}</Text>
                <Text style={[Theme.fonts.quicksandbold15, { marginTop: 24, color: Theme.colors.white }]}>{I18n.t('email_exists')}</Text>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        marginTop: 25,
                    }}
                    behavior="padding"
                    enabled >
                    <ScrollView contentContainerStyle={{}}>
                        <View style={styles._container}>
                            <View style={[styles._viewTextInput, { marginTop: 24, }]}>
                                <Image
                                    style={styles._imgIcon}
                                    source={require('../../assets/images/img_user.png')} />
                                <TextInput
                                    placeholder={'Email'}
                                    style={[Theme.fonts.quicksandbold15, styles._textInput]}
                                    onChangeText={(text) => {
                                        this.setState({
                                            email: text
                                        })
                                    }} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={styles._imgIcon}
                                    source={require('../../assets/images/img_password.png')} />
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={'Mật khẩu'}
                                    style={[Theme.fonts.quicksandbold15, styles._textInput]}
                                    onChangeText={(text) => {
                                        this.setState({
                                            pass: text
                                        })
                                    }} />
                            </View>
                            <View style={styles._viewTextInput}>
                                <Image
                                    style={styles._imgIcon}
                                    source={require('../../assets/images/img_password.png')} />
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder={'Nhập lại mật khẩu'}
                                    style={[Theme.fonts.quicksandbold15, styles._textInput]}
                                    onChangeText={(text) => {
                                        this.setState({
                                            pass_again: text
                                        })
                                    }} />
                            </View>
                            <TouchableOpacity style={styles._viewButton} onPress={() => { this.register() }}>
                                <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>{I18n.t('register')}</Text>
                            </TouchableOpacity>
                            <Text style={[Theme.fonts.quicksandbold12, { marginTop: 15, color: Theme.colors.black3 }]}>{I18n.t('or')}</Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 8,
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
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={{
                    flexDirection: "row",
                    // marginTop: 30,
                    alignItems: "center"
                }}>
                    <Text style={[Theme.fonts.quicksandbold12, { color: Theme.colors.white }]}>{I18n.t('c')} </Text>
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

// import React, { Component } from 'react'
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     TextInput,
//     StyleSheet,
//     Image
// } from 'react-native'
// import { connect } from 'react-redux'
// import * as Theme from '../../constants/Theme'
// import I18n from '../../i18n/i18n'
// import reactotron from 'reactotron-react-native'
// import { requestRegister } from '../../redux/actions/index'
// import { showMessages } from '../../component/Alert'

// export class RegisterScreen extends Component {
//     state = {
//         email: "tund@gmail.com",
//         pass: "",
//         pass_again: ""
//     }
//     componentDidMount() {
//         reactotron.log(this.props.registerState)
//         reactotron.log(this.props.requestRegister)
//     }
//     register() {
//         if (this.state.email.trim().length == 0 || this.state.pass.trim().length == 0 || this.state.pass_again.trim().length == 0) {
//             showMessages(I18n.t('notification'), I18n.t('empty_value'))
//             return;
//         }
//         else {
//             this.props.requestRegister(
//                 this.state.email.trim(),
//                 this.state.pass.trim(),
//                 // this.state.pass_again.trim(),
//             );
//         }
//     }
//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 alignItems: "center",
//                 justifyContent: "center"
//             }}>
//                 <View style={[styles._viewTextInput, { marginTop: 24 }]}>
//                     <Image
//                         style={styles._imgIcon}
//                         source={require('../../assets/images/img_user.png')} />
//                     <TextInput
//                         placeholder={'Email'}
//                         style={[Theme.fonts.quicksandbold15, styles._textInput]}
//                         value={this.state.email}
//                         onChangeText={(text) => {
//                             this.setState({
//                                 email: text
//                             })
//                         }} />
//                 </View>
//                 <View style={[styles._viewTextInput, { marginTop: 15 }]}>
//                     <Image
//                         style={styles._imgIcon}
//                         source={require('../../assets/images/img_password.png')} />
//                     <TextInput
//                         secureTextEntry={true}
//                         placeholder={'Mật khẩu'}
//                         style={[Theme.fonts.quicksandbold15, styles._textInput]}
//                         onChangeText={(text) => {
//                             this.setState({
//                                 pass: text
//                             })
//                         }} />
//                 </View>
//                 <View style={[styles._viewTextInput, { marginTop: 15 }]}>
//                     <Image
//                         style={styles._imgIcon}
//                         source={require('../../assets/images/img_password.png')} />
//                     <TextInput
//                         secureTextEntry={true}
//                         placeholder={'Nhập lại mật khẩu'}
//                         style={[Theme.fonts.quicksandbold15, styles._textInput]}
//                         onChangeText={(text) => {
//                             this.setState({
//                                 pass_again: text
//                             })
//                         }} />
//                 </View>
//                 <TouchableOpacity style={styles._viewButton} onPress={() => {
//                     this.register()
//                     // NavigationUtil.navigate(SCREEN_ROUTER.REGISTERCOMPLETE)
//                 }}>
//                     <Text style={[Theme.fonts.bold15, { color: Theme.colors.white }]}>{I18n.t('register')}</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

const mapStateToProps = (state) => ({
    registerState: state.registerReducer
})

const mapDispatchToProps = {
    requestRegister
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)


const styles = StyleSheet.create({
    _bg: {
        flex: 1,
        alignItems: "center",
    },
    _textRegister: {
        marginTop: 10,
        textAlign: "center",
        color: Theme.colors.white,
    },
    _logo: {
        marginTop: "10%",
        width: 226,
        height: 63,
        resizeMode: "contain",
    },
    _container: {
        width: 380,
        backgroundColor: Theme.colors.white,
        // justifyContent: "center",
        alignItems: "center",
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
        marginTop: 15,
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
