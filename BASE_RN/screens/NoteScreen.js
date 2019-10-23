import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import * as Theme from '../constants/Theme'
import * as Icon from '@expo/vector-icons'
import NavigationUtil from "../navigation/NavigationUtil";

export default class NoteScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={{
                alignItems: "center"
            }}>
                <Image
                    style={{
                        width: "100%",
                        height: Theme.dimension.height * 0.4,
                        resizeMode: "stretch"
                    }}
                    source={require('../assets/images/img_patener.png')} />
                <Image style={{
                    width: "30%",
                    height: "25%",
                    position: "absolute",
                    resizeMode: "contain",
                    top: Theme.dimension.height * 0.4 * 0.12
                }}
                    source={require('../assets/images/img_logo2.png')} />
                <View style={{
                    height: Theme.dimension.height * 0.7,
                    width: "90%",
                    position: "absolute",
                    top: "40%",
                    backgroundColor: "#FFF",
                    borderRadius: 10,
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.39,
                    shadowRadius: 8.30,
                    elevation: 13,
                }}>
                    <View style={{
                        height: Theme.dimension.height * 0.7 * 0.08,
                        marginTop: "2%",
                        borderBottomWidth: 1,
                        borderColor: "#DDDD",
                        flexDirection: "row",
                        alignItems: "center"

                    }}>
                        <TouchableOpacity
                            style={{
                                width : "6%",
                                paddingLeft : "2%"
                            }}
                            onPress={NavigationUtil.goBack}>
                            <Icon.Ionicons name={'ios-arrow-back'} size={25} color={"#E55C9B"} />
                        </TouchableOpacity>
                        <Text style={{ color: "#E55C9B", marginLeft :'1%' }}>15/05/2019</Text>
                    </View>
                    <TextInput 
                    multiline
                    placeholder = "Mời bạn nhập ghi chú ....  "
                    style={{
                        marginTop :"2%", 
                        marginHorizontal : "2%",
                        backgroundColor: "#fff",
                    }} />
                </View>
            </View>
        )
    }
}
