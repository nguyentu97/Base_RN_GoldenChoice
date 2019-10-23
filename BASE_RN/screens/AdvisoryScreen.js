import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as Theme from '../constants/Theme'
import * as Icon from '@expo/vector-icons'

export default class AdvisoryScreen extends Component {
    state = {
        onClickItem5: true,
        onClickItem6: true,
    }
    render() {
        return (
            <View style={{
                width: "100%",
                height: Theme.dimension.height * 0.6,
                paddingBottom: "3%",
                backgroundColor: "#DDDDDD"
            }}>
                <View style={styles._viewBar}>
                    <Image
                        style={{
                            height: 30,
                            width: 30,
                            marginLeft: "3%",
                            resizeMode: 'contain'
                        }}
                        source={require('../assets/images/img_advisory.png')} />
                    <Text style={{
                        width: "76%",
                        marginLeft: "2%"
                    }}>Những câu hỏi thường gặp</Text>
                    <View style={{
                        width: 30,
                        height: 30,
                        backgroundColor: "#E55C9B",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}>
                        <Icon.Ionicons name={'ios-add'} size={30} color={"#fff"} />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>1</Text>
                        </View>
                        <Text>Vẫn có kinh bình thường khi uống thuốc ngừa?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>2</Text>
                        </View>
                        <Text>Trường hợp bạn quên uống ít nhất hơn một viên?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>3</Text>
                        </View>
                        <Text>Những ai không nên dùng thuốc tránh thai phối hợp?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>4</Text>
                        </View>
                        <Text>Nên uống vào thời điểm nào trong ngày?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        width: "95%",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        marginLeft: "2%",
                        marginTop: "3%",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.30,
                        elevation: 13,
                    }}
                        onPress={() => {
                            this.setState({
                                onClickItem5: !this.state.onClickItem5
                            })
                        }}>

                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>5</Text>
                        </View>
                        <View style={{
                            marginTop: "1%",
                            width: "85%",
                        }}>
                            <Text>Những lợi ích của thuốc ngừa thai?</Text>
                            {!this.state.onClickItem5 && <Text style={{
                                fontSize: 12,
                                color: "#E55C9B",
                            }}>
                                Ngoài lợi ích ngừa thai, thuốc tránh thai có
                                thể hỗ trợ giảm tỷ lệ ung thư nội mạc tử cung và ung thư buồng trứng.
                                Không chỉ vậy, thuốc còn làm giảm lượng máu kinh và rút ngắn thời gian có kinh,
                                từ đó giảm nguy cơ thiếu máu, giảm các triệu chứng khó chịu trước khi hành kinh;
                                làm cho chu kỳ kinh ổn định và hiện tượng đau bụng do kinh cũng bớt đi. Đặc biệt,
                                thuốc giúp làm giảm mụn trứng cá do rối loạn nội tiết ở tuổi dậy thì.
                            </Text>}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        width: "95%",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        marginLeft: "2%",
                        marginTop: "3%",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.30,
                        elevation: 13,
                    }}
                        onPress={() => {
                            this.setState({
                                onClickItem6: !this.state.onClickItem6
                            })
                        }}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>6</Text>
                        </View>
                        <View style={{
                            marginTop: "1%",
                            width: "85%",
                        }}>
                            <Text>Có thể dùng viên tránh thai lâu dài không?</Text>
                            {!this.state.onClickItem6 && <Text style={{
                                fontSize: 12,
                                color: "#E55C9B",
                            }}>Có, nếu sức khỏe của bạn bình thường và bác sĩ vẫn khuyên bạn sử dụng.
                            Một số thuốc tránh thai có thể dùng cho đến khi bạn đến tuổi mãn kinh.
                            </Text>}
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>7</Text>
                        </View>
                        <Text>Quên uống thuốc và có thai, đứa trẻ có bị gì không?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>8</Text>
                        </View>
                        <Text >Hiệu quả tránh thai như thế nào?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>9</Text>
                        </View>
                        <Text>Sau khi dùng thuốc, bạn có thể có con không?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._viewItem}>
                        <View style={styles._viewItemIcon}>
                            <Text style={{ fontWeight: "bold" }}>10</Text>
                        </View>
                        <Text>Quên uống và có thai, đứa trẻ có bị gì không?</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    _viewBar: {
        backgroundColor: "#DDD",
        width: "100%",
        height: Theme.dimension.height * 0.6 * 0.13,
        alignItems: "center",
        flexDirection: "row",
    },
    _viewItem: {
        flexDirection: "row",
        width: "95%",
        height: Theme.dimension.height * 0.6 * 0.1,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingTop: "1%",
        marginLeft: "2%",
        marginTop: "3%",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    _viewItemIcon: {
        width: Theme.dimension.width * 0.6 * 0.1,
        height: Theme.dimension.width * 0.6 * 0.1,
        borderRadius: Theme.dimension.width / 2,
        borderWidth: 1,
        borderColor: "#707070",
        marginHorizontal: "3%",
        justifyContent: "center",
        alignItems: "center"
    },
})
