import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import * as Theme from '../constants/Theme'

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28];

class FlatListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{
                // flex: 1,
                width: 30,
                height: 30,
                borderRadius: 100,
                overflow: 'hidden',
                backgroundColor: "yellow",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 17,
                marginLeft: 40,
                borderWidth: 1,
                borderColor: "#707070"
            }}>
                <Text>{this.props.item}</Text>
            </TouchableOpacity>
        )
    }
}

export default class TakeMedicinesScreen extends Component {
    render() {
        return (
            <View style={{
                flexDirection: "row"
            }}>
                <View style={styles._viewNumber}>
                    <Text style={styles._number}>THỨ{'\n'}NĂM</Text>
                    <Text style={styles._number}>THỨ{'\n'}SÁU</Text>
                    <Text style={styles._number}>THỨ{'\n'}BẢY</Text>
                    <Text style={styles._number}>CHỦ{'\n'}NHẬT</Text>
                    <Text style={styles._number}>THỨ{'\n'}HAI</Text>
                    <Text style={styles._number}>THỨ{'\n'}BA</Text>
                    <Text style={styles._number}>THỨ{'\n'}TƯ</Text>
                </View>
                <View style={{
                    backgroundColor: "#fff",
                    marginTop: 30,
                    marginLeft: 10,
                    width: "80%",
                    height: "82%",
                    alignItems: "center",
                    // paddingHorizontal : "5%"
                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: "center"
                        }}>
                        Bạn đã uống {<Text style={{ color: "red" }}>2</Text>} Viên NC (còn lại {<Text style={{ color: Theme.colors.indicator }}>19</Text>} Viên){'\n'}& {<Text style={{ color: Theme.colors.indicator }}>7</Text>} Viên Sắt Bổ Sung
                </Text>
                    <FlatList
                        numColumns={4}
                        style={{
                            // flex: 1,
                            width: "90%",
                        }}
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={({ item, index }) => {
                            return (<FlatListItem item={item} index={index} />)
                        }}>
                    </FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    _viewNumber: {
        justifyContent: "space-between",
        height: "67%",
        marginTop: Theme.dimension.height * 0.118,
        marginLeft: 30,
    },
    _number: {
        color: "red",
        fontSize: 8,
        textAlign: "center",
        // backgroundColor: "red",
        transform: [{ rotate: "-90deg" }]
    },
})


