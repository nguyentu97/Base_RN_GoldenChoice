import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import NavigationUtil from "../navigation/NavigationUtil";
import * as Icon from "@expo/vector-icons";
import * as theme from "./Theme";
import { SCREEN_ROUTER } from "./Constant";

export default class AppHeader extends Component {
  render() {
    const title = this.props.title;
    const { back, search, ...props } = this.props;

    return (
      <Header
        placement="center"
        containerStyle={
          {
            // height : 0
          }
        }
        barStyle="light-content"
        backgroundColor={"#ff8c00"}
        leftComponent={
          back && (
            <TouchableOpacity
              style={{
                // flex: 1,
                height: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={NavigationUtil.goBack}
            >
              <Icon.Ionicons
                name="ios-arrow-round-back"
                size={35}
                color={theme.colors.headerTextColor}
              />
              {/* <Text style={[theme.fonts.bold23, {marginLeft: 10, color : theme.colors.headerTextColor}]}>{title}</Text> */}
            </TouchableOpacity>
          )
        }
        centerComponent={
          <Text
            numberOfLines={1}
            // ellipsizeMode={'tail'}
            style={[
              theme.fonts.bold23,
              { color: theme.colors.headerTextColor }
            ]}
          >
            {title}
          </Text>
        }
        rightComponent={
          search && (
            <TouchableOpacity onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.SEARCH_SCREEN)}>
              <Icon.MaterialIcons name="search" size={25} color="white" />
            </TouchableOpacity>
          )
        }
      />
    );
  }
}
