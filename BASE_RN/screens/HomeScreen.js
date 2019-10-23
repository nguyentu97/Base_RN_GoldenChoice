import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from '@expo/vector-icons'
import * as Theme from '../constants/Theme'
import I18n from '../i18n/i18n'
import TakeMedicinesScreen from '../screens/TakeMedicinesScreen'
import DiaryScreen from '../screens/DiaryScreen'
import SettingScreen from '../screens/SettingScreen'
import AdvisoryScreen from '../screens/AdvisoryScreen'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isClickIcon1: true,
    isClickIcon2: true,
    isClickIcon3: true,
    isClickIcon4: true,
  }
  render() {
    return (
      <View style={styles._viewRoot}>
        <View style={styles._viewMenu}>
          <Image
            style={styles._patterner}
            source={require('../assets/images/img_patener.png')} />
          <Image
            style={styles._logo}
            source={require('../assets/images/img_logo2.png')} />
          <View style={styles._card}>
            <View style={{
              alignItems: "center"
            }}>
              <TouchableOpacity style={[styles._viewIcon, { backgroundColor: !this.state.isClickIcon1 ? "#F2ADCD" : "#fff" }]}
                onPress={() => {
                  if (!this.state.isClickIcon1) {
                    this.setState({
                      isClickIcon1: !this.state.isClickIcon1,
                      isClickIcon2: true,
                      isClickIcon3: true,
                      isClickIcon4: true
                    })
                  }
                }}>
                <Image
                  style={[styles._icon, { tintColor: this.state.isClickIcon1 ? "#F2ADCD" : "#fff" }]}
                  source={require('../assets/images/img_drink_medicine.png')}
                />
              </TouchableOpacity>
              <Text
                style={styles._textIcon}>{I18n.t("medicines")}</Text>
            </View>
            <View>
              <TouchableOpacity style={[styles._viewIcon, { backgroundColor: this.state.isClickIcon2 ? "#F2ADCD" : "#fff" }]}
                onPress={() => {
                  if (this.state.isClickIcon2) {
                    this.setState({
                      isClickIcon2: !this.state.isClickIcon2,
                      isClickIcon1: false,
                      isClickIcon3: true,
                      isClickIcon4: true
                    })
                  }
                }}>
                {/* <Icon.EvilIcons name={'calendar'} size={Theme.dimension.width * 0.13 * 0.8} color={this.state.isClickIcon2 ? "#F2ADCD" : "#fff"} /> */}
                <Image
                  style={[styles._icon, { tintColor: !this.state.isClickIcon2 ? "#F2ADCD" : "#fff" }]}
                  source={require('../assets/images/img_diary.png')}
                />
              </TouchableOpacity>
              <Text
                style={styles._textIcon}>{I18n.t('diary')}</Text>
            </View>
            <View style={{
              alignItems: "center",
            }}>
              <TouchableOpacity style={[styles._viewIcon, { backgroundColor: this.state.isClickIcon3 ? "#F2ADCD" : "#fff" }]}
                onPress={() => {
                  if (this.state.isClickIcon3) {
                    this.setState({
                      isClickIcon3: !this.state.isClickIcon3,
                      isClickIcon1: false,
                      isClickIcon2: true,
                      isClickIcon4: true
                    })
                  }
                }}>
                <Image
                  style={[styles._icon, { tintColor: !this.state.isClickIcon3 ? "#F2ADCD" : "#fff" }]}
                  source={require('../assets/images/img_question.png')} />
              </TouchableOpacity>
              <Text style={styles._textIcon}>{I18n.t('advisory')}</Text>
            </View>
            <View>
              <TouchableOpacity style={[styles._viewIcon, { backgroundColor: this.state.isClickIcon4 ? "#F2ADCD" : "#fff" }]}
                onPress={() => {
                  if (this.state.isClickIcon4) {
                    this.setState({
                      isClickIcon4: !this.state.isClickIcon4,
                      isClickIcon1: false,
                      isClickIcon2: true,
                      isClickIcon3: true,
                    })
                  }
                }}>
                <Image
                  style={[styles._icon, { tintColor: !this.state.isClickIcon4 ? "#F2ADCD" : "#fff" }]}
                  source={require('../assets/images/img_setting.png')}
                />
              </TouchableOpacity>
              <Text style={styles._textIcon}>{I18n.t('setting')}</Text>
            </View>
          </View>
          <View style={{
            position: "absolute",
            width: "80%",
            bottom: Theme.dimension.height * 0.008,
            left: 25,
            flexDirection: "row",
          }}>
            <View style={{
              alignItems: "center",
              marginRight: 10,
            }}>
              <Image
                style={{
                  width: Theme.dimension.height * 0.07,
                  height: Theme.dimension.height * 0.07,
                  resizeMode: 'contain'
                }}
                source={require('../assets/images/img_paramid.png')} />
              <Text style={{
                fontSize: 8,
              }}>Trạng thái</Text>
              <Text style={{
                fontSize: 8,
                fontWeight: "bold",
                color: "red"
              }}>KHÔNG ĐƯỢC BẢO VỆ</Text>
            </View>
            <View style={{
              height: Theme.dimension.height * 0.1,
              width: 1,
              backgroundColor: '#DDD'
            }} />
            <Text style={{
              marginLeft: 15,
              fontSize: 10,
              width: "75%"
            }}>
              Tư bản ko thể xuất hiện từ lưu thông và cũng
              ko thể xuất hiện ở bên ngoài lưu thông. Nó phải xuất hiện trong lưu thông
              và đồng thời ko phải trong lưu thông
             </Text>
          </View>
        </View>

        {/* View Conten----------- */}

        <View style={styles._viewContent}>
          {this.state.isClickIcon1 && <TakeMedicinesScreen />}
          {!this.state.isClickIcon2 && <DiaryScreen />}
          {!this.state.isClickIcon3 && <AdvisoryScreen />}
          {!this.state.isClickIcon4 && <SettingScreen />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _viewRoot: {
    flex: 1,
    backgroundColor: "#DDDDDD"
  },
  _viewMenu: {
    backgroundColor: "#fff",
    height: Theme.dimension.height * 0.4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center"
  },
  _card: {
    width: "90%",
    borderRadius: 15,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#fff",
    marginTop: Theme.dimension.height * 0.4 * 0.35,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: Theme.dimension.height * 0.4 * 0.35 * 0.07,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  _patterner: {
    width: "100%",
    height: Theme.dimension.height * 0.4 * 0.85,
    resizeMode: "stretch"
  },
  _logo: {
    width: "30%",
    height: "25%",
    position: "absolute",
    resizeMode: "contain",
    top: Theme.dimension.height * 0.4 * 0.12
  },
  _icon: {
    height: "60%",
    width: "60%",
    resizeMode: "contain"
  },
  _viewIcon: {
    height: Theme.dimension.width * 0.13,
    width: Theme.dimension.width * 0.13,
    borderRadius: (Theme.dimension.width * 0.13) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  _textIcon: {
    flex: 1,
    marginTop: 3,
    alignSelf: "center",
    fontSize: 12
  },
  _viewContent: {
    backgroundColor: "#ffff",
    marginTop: 5,
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
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
    transform: [{ rotate: "-90deg" }]
  },


})   