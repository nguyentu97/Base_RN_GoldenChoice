import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import I18n from '../i18n/i18n';

class Error extends Component {
    render() {
        return (
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Icon.MaterialIcons name='refresh' size={45} color='orange'/>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: '#FF0000' }}>{I18n.t('network_err')}</Text>
            </View>
        );
    }
}

export default Error;
