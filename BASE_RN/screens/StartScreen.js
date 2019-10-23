import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import * as Theme from '../constants/Theme'

export default class StartScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#F799C4",
                alignItems: "center",
            }}>
                <Image style={{
                    width: "100%",
                    height: Theme.dimension.height * 0.35,
                    resizeMode: "stretch"
                }}
                    source={require('../assets/images/img_patener.png')} />

                <Image
                    style={{
                        width: Theme.dimension.height * 0.4,
                        height: Theme.dimension.height * 0.4,
                        position: "absolute",
                        top: "20%",
                        left: "1%",
                    }}
                    source={require('../assets/images/img_start_logo.png')} />
                <Text style={{
                    textAlign: "center",
                    marginTop: "40%",
                    color: "#FFF"
                }}>LOẠI THUỐC{'\n'}xin vui lòng lựa chọn</Text>
                <View style={{
                    marginTop: "4%",
                    flexDirection: "row",
                    width: "60%",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        backgroundColor: "#fff",
                        height: Theme.dimension.height * 0.15,
                        width: Theme.dimension.height * 0.15,
                        borderRadius: Theme.dimension.height / 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            style={{
                                width: Theme.dimension.height * 0.06,
                                height: Theme.dimension.height * 0.06,
                                resizeMode: "contain",
                                tintColor: "#E55C9B"
                            }}
                            source={require('../assets/images/img_drink_medicine.png')} />
                    </View>
                    <View style={{
                        backgroundColor: "#fff",
                        height: Theme.dimension.height * 0.15,
                        width: Theme.dimension.height * 0.15,
                        borderRadius: Theme.dimension.height / 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            style={{
                                width: Theme.dimension.height * 0.06,
                                height: Theme.dimension.height * 0.06,
                                resizeMode: "contain",
                                tintColor: "#E55C9B"
                            }}
                            source={require('../assets/images/img_medicines.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

