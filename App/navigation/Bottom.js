

// ui
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";


// assets
import HomeIcon from "../assets/home.svg";
import Ranking from "../assets/Ranking.svg";
import RankingActive from "../assets/RankingActive.svg";
import League from "../assets/League.svg";
import LeagueActive from "../assets/LeagueActive.svg";
import HomeActive from "../assets/HomeActive.svg";
import Home from "../assets/Home2.svg";
import TransferActive from "../assets/TransferActive.svg";
import Transfer from "../assets/Transfer.svg";
import ProfileActive from "../assets/ProfileActive.svg";
import Profile from "../assets/Profile.svg";

import AssignmentIcon from "../assets/assignment.svg";
import AssignmentIconActive from "../assets/assignmentactive.svg";
import SearchIcon from "../assets/search.svg";
import SearchIconActive from "../assets/searchactive.svg";

// nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// components
import { HomeScreen } from "../Screens/Home/index";
import { AgendaScreen } from "../Screens/Agenda/index";
import {Transfert} from '../Screens/Transfer'
import {LeagueScreen} from '../Screens/League/index.js'
import {Profil} from '../Screens/Profile/index.js'
import {Rankings} from '../Screens/Ranking/index.js'
import {Changement} from '../Screens/Changement/index.js'


import { JournalScreen } from "../Screens/Journal/index";
import { SearchScreen } from "../Screens/Search/index";
import { ThemeContext } from "../theme/theme-context";



import { useNavigation, useRoute } from "@react-navigation/native";

import CustomTabBar from "../Components/CustomTabBar";

import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "@ui-kitten/components";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/* import { Text } from "@ui-kitten/components";
// assets
import HomeIcon from "../assets/home.svg";
import HomeIconActive from "../assets/homeactive.svg";
import AgendaIconActive from "../assets/agendaactive.svg";
import AgendaIcon from "../assets/agenda.svg";
import AssignmentIcon from "../assets/assignment.svg";
import AssignmentIconActive from "../assets/assignmentactive.svg";
import SearchIcon from "../assets/search.svg";
import SearchIconActive from "../assets/searchactive.svg";
// nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// components
import { HomeScreen } from "../Screens/Home/index";
import { AgendaScreen } from "../Screens/Agenda/index";
import { JournalScreen } from "../Screens/Journal/index";
import { SearchScreen } from "../Screens/Search/index";
import { ThemeContext } from "../theme/theme-context";
import CustomTabBar from '../Components/CustomTabBar'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); */




export function BottomNavigator() {
  const navigation = useNavigation();
  const route = useRoute();

  const { themeElements } = React.useContext(ThemeContext);

  useEffect(() => {
    navigation.addListener();
  }, []);

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "aliceblue",
  //     height: "100%",
  //     width: "100%",
  //   },
  // });
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F2F2" }}>



      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        
          tabBarStyle: {
            height: "8%",
           // width: "200%",
            marginHorizontal: "0%",
            borderRadius: 10,
          //  paddingTop: "5%",
            backgroundColor: "rgba(255,255,255,0)",
            paddingHorizontal: 0,
            borderTopWidth: 0,
      
          },
          tabBarLabelStyle: {
            flex: 1,
          },
        }}
        barStyle={{ backgroundColor: "#B974FF" }}
      >
          <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={{
          tabBarLabel:'',
         /*  (focused )=><Text style={{paddingTop:30,color:focused?
            '#BAFF2A':'#F4F2F2',fontSize:14}}>Ranking</Text> */ 
          tabBarIcon: ({ color, size, focused }) =>
          <View style={{flexDirection:'column',marginTop:-24,alignItems:'center'}}>
           {focused ? <RankingActive width={24} /> : <Ranking width={24} />}
            <Text style={{color:focused?
            '#BAFF2A':'#F4F2F2',fontSize:14}}>Ranking</Text>
            </View>,
          //   tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="LeagueScreen"
        component={LeagueScreen}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color, size, focused }) =>
          <View style={{flexDirection:'column',marginTop:-24,alignItems:'center'}}>
          {focused ? <LeagueActive width={24} /> : <League width={24} />}
           <Text style={{color:focused?
           '#BAFF2A':'#F4F2F2',fontSize:14}}>League</Text>
           </View>,
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="Transfert"
        component={Transfert}
        options={{
          tabBarLabel:'' ,
          tabBarIcon: ({ color, size, focused }) =>
          <View style={{marginTop:focused?-32:-24,alignItems:'center'}}>
          {focused ? <HomeActive width={60} /> : <Home width={70} />}
          
           </View>,
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="Changement"
        component={Changement}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color, size, focused }) =>
          <View style={{flexDirection:'column',marginTop:-24,alignItems:'center'}}>
          {focused ? <TransferActive width={24} /> : <Transfer width={24} />}
           <Text style={{color:focused?
           '#BAFF2A':'#F4F2F2',fontSize:14}}>Transfer</Text>
           </View>,
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color, size, focused }) =>
          <View style={{flexDirection:'column',marginTop:-22,alignItems:'center'}}>
          {focused ? <ProfileActive width={26} /> : <Profile width={26} />}
           <Text style={{color:focused?
           '#BAFF2A':'#F4F2F2',fontSize:14}}>Profile</Text>
           </View>,
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      </Tab.Navigator>
    </View>
  );
}
