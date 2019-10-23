import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as Theme from '../constants/Theme'

export default class SettingScreen extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles._viewItem}>
                    <Text>Giới thiệu về Ứng dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <Text>Hướng dẫn sử dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <Text>Cài đặt về trạng thái ban đầu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <Text>Đã uống bù 1 viên New Choice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._viewItem}>
                    <Text>Phiên bản</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    _viewItem: {
        width: "100%",
        height: Theme.dimension.height * 0.6 * 0.1,
        borderBottomWidth: 1,
        borderColor: "#EFEFEF",
        justifyContent: "center",  
        paddingLeft: "5%",
    },
})
