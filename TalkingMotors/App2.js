import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screen/Login'
import Profile from './src/screen/Profile'
import Home from './src/screen/Home'
import Search from './src/screen/Search'
import Register from './src/screen/Register'

// import LoginScreen from './src/screens/Login'
// import SelectCountryScreen from './src/screens/SelectCountry'
// import MyOrdersScreen from './src/screens/MyOrders'
// import HistoryOrdersScreen from './src/screens/HistoryOrders'
// import AppSettingsScreen from './src/screens/AppSettings'
// import RevenueReportScreen from './src/screens/RevenueReport'

export default class App extends React.Component {
  render() {
    return <StackNavigator />;
  }
}


const CustomDrawerComponent = props => {
  return (
    <ScrollView>
      <SafeAreaView >
        <View style={{ marginBottom: '15%', height: 50, marginLeft: '3%', marginTop: '5%' }}>
          <Ionicons name="md-settings" style={{ marginBottom: '3%' }} onPress={() => props.navigation.closeDrawer()} />
          {/* <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Settings
          </Text> */}
          {/* <Image
            style={{ height: 50 }}
            source={require('./Images/supermeal.jpg')}
          /> */}
        </View>
        <DrawerItems {...props}/>
      </SafeAreaView>
    </ScrollView>

  );
}

const StackNavigator = createStackNavigator({
    Login: Login,
    Register: Register,
}, {
  initialRouteName: 'Login',
});

const AppDrawerContainer = createDrawerNavigator({
    Home:{screen:Home, 
    navigationOptions:{
      drawerIcon: ({tintColor}) => <FontAwesome name='reorder' size={20} color={tintColor} />
    } } ,
  Profile:{screen:Profile, 
    navigationOptions:{
      drawerIcon: ({tintColor}) => <FontAwesome name='history' size={20} color={tintColor} />
    } } ,
  Search:{screen:Search, 
    navigationOptions:{
      drawerIcon: ({tintColor}) => <Ionicons name='md-settings' size={20} color={tintColor} />
    } } , 
//   RevenueReport: {screen:RevenueReportScreen, 
//     navigationOptions:{
//       drawerIcon: ({tintColor}) => <MaterialCommunityIcons name='file-document-edit' size={20} color={tintColor} />
//     } } ,
}
  ,
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
    drawerWidth: '75%',
    contentOptions:{
      activeBackgroundColor: '#D4F2F3',
      itemsContainerStyle:{
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle:{
        borderRadius: 5
      }
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
    Auth: { screen: StackNavigator },
    Home: { screen: AppDrawerContainer },

}, {
  initialRouteName: 'Auth',
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const AppDrawer = createAppContainer(AppContainer);