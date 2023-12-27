// ui
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
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

export function BottomNavigator() {
  const { themeElements } = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
      height: "100%",
      width: "100%",
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: "8%",
          width: "100%",
          marginHorizontal: "0%",
          borderRadius: 10,
          paddingTop: "5%",
        //  backgroundColor: "rgba(255,255,255,0)",
          paddingHorizontal: 20,
          borderTopWidth: 0,

        },
        tabBarLabelStyle: {
          flex: 1,
        },
      }}
      barStyle={{ backgroundColor: "red" }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Acceuil",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? <HomeIconActive width={24} /> : <HomeIcon width={24} />,
          //   tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <AgendaIconActive width={24} />
            ) : (
              <AgendaIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{
          tabBarLabel: "Journal de bord",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <AssignmentIconActive width={24} />
            ) : (
              <AssignmentIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Recherche",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <SearchIconActive width={24} />
            ) : (
              <SearchIcon width={24} />
            ),
          tabBarActiveTintColor: themeElements["color-primary"],
        }}
      />
    </Tab.Navigator>
    </View>
  );
}
