import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import * as AppConstant from '../constants/Constant'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import NoteScreen from '../screens/NoteScreen'
import Log_RegScreen from '../screens/auth/Log_RegScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import RegisterComplete from '../screens/auth/RegisterComplete'
import UserManualECScreen from '../screens/new_choice_ec/UserManualECScreen'
import UserManualOCScreen from '../screens/new_choice_oc/UserManualOCScreen'
import SelectUserScreen from '../screens/auth/SelectUserScreen'
import SelectMedicineScreen from '../screens/auth/SelectMedicineScreen'
import AttentionECScreen from '../screens/new_choice_ec/AttentionECScreen'
import AttentionOCScreen from '../screens/new_choice_oc/AttentionOCScreen'
import SettingAlarmScreen from '../screens/slide_menu/SettingAlarmScreen'

const Auth = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

const Screen = createStackNavigator({
  Main: MainTabNavigator,
  Note: NoteScreen,
  Log_Reg: Log_RegScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  RegisterComplete: RegisterComplete,
  UserManualEC: UserManualECScreen,
  UserManualOC: UserManualOCScreen,
  SelectUser: SelectUserScreen,
  SelectMedicine: SelectMedicineScreen,
  AttentionEC: AttentionECScreen,
  AttentionOC: AttentionOCScreen,
  SettingAlarm: SettingAlarmScreen
},
  {
    headerMode: 'none'
  })


export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: Auth,
  Screen: Screen

}));