import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList, Image, TouchableOpacity
} from 'react-native'
import * as Theme from '../constants/Theme'
import NavigationUtil from '../navigation/NavigationUtil'
import {SCREEN_ROUTER} from '../constants/Constant'


export default class DiaryScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles._viewBar}>
                    <View style={styles._viewCard}>
                        <TouchableOpacity style={[styles._viewCardItem, {
                            borderTopLeftRadius: 8,
                            borderBottomLeftRadius: 8,
                        }]}>
                            <Image
                                style={{
                                    height: "50%",
                                    width: "50%",
                                    resizeMode: "contain"
                                }}
                                source={require('../assets/images/img_menu.png')} />
                        </TouchableOpacity>
                        <View style={{
                            width: 1,
                            height: "100%",
                            backgroundColor: "#fff",
                        }} />
                        <TouchableOpacity style={[styles._viewCardItem, {
                            backgroundColor: "#F2ADCD",
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                        }]}>
                            <Image
                                style={{
                                    height: "70%",
                                    width: "70%",
                                    resizeMode: "contain"
                                }}
                                source={require('../assets/images/img_calander.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles._viewItem}>
                    <View style={styles._viewItemIcon}></View>
                    <Text style={styles._viewItemText}>Đã uống 1 viên New Choice</Text>
                    <Text>11/04/2019</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <View style={[styles._viewItemIcon, {
                        justifyContent: "center",
                        alignItems: "center",
                    }]}>
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                resizeMode: "contain"
                            }}
                            source={require('../assets/images/img_warring1.png')} />
                    </View>
                    <Text style={styles._viewItemText}>Đã uống bù 1 viên New Choice</Text>
                    <Text>11/04/2019</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles._viewItem}
                onPress={()=>{
                    NavigationUtil.navigate(SCREEN_ROUTER.NOTE)
                }}>
                    <Image
                        style={{
                            width: "9%",
                            height: "50%",
                            resizeMode: "contain",
                            // marginHorizontal : "2%"
                        }}
                        source={require('../assets/images/img_note.png')} />
                    <Text style={styles._viewItemText}>Viết Note</Text>
                    <Text>11/04/2019</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <View style={styles._viewItemIcon}>
                    </View>
                    <Text style={styles._viewItemText}>Đã uống 1 viên New Choice</Text>
                    <Text>11/04/2019</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <View style={[styles._viewItemIcon, {
                        borderWidth: 1,
                        borderColor: "#707070",
                        backgroundColor: "#48250D",
                    }]}>
                    </View>
                    <Text style={styles._viewItemText}>Đã uống 1 viên New Choice Sắt</Text>
                    <Text>11/04/2019</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    _viewBar: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#E55C9B",
        width: "100%",
        height: Theme.dimension.height * 0.6 * 0.13,
        alignItems: "center",
        justifyContent: "center"
    },
    _viewCard: {
        width: "40%",
        height: "60%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    _viewCardItem: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    _viewItem: {
        flexDirection: "row",
        width: "100%",
        height: Theme.dimension.height * 0.6 * 0.1,
        borderBottomWidth: 1,
        borderColor: "#EFEFEF",
        alignItems: "center",
    },
    _viewItemIcon: {
        width: Theme.dimension.width * 0.6 * 0.08,
        height: Theme.dimension.width * 0.6 * 0.08,
        borderRadius: Theme.dimension.width / 2,
        backgroundColor: "yellow",
        borderWidth: 1,
        borderColor: "#707070",
        marginHorizontal: "2%"
    },
    _viewItemText: {
        width: "70%"
    }
})