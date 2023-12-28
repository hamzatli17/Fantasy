import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function CustomTabBar({ state, descriptors, navigation }) {
  if (state?.routes[state?.index]?.name === "CreateMusique"  ) return <></>;

  return (

      <View style={{
           flexDirection:'row',
           justifyContent:"space-between",
           alignItems:'center',
          width: "100%",
           height:60,
           marginHorizontal:'0%',
           backgroundColor:'transparent'
          // paddingHorizontal:20
      }}>
    <LinearGradient
      colors={["#000041", "#000317"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{
        //borderRadius: 10,

    
       borderTopRightRadius:10,
       borderTopLeftRadius:10,

        //opacity: 0.5,
        width: "100%",
        height: '100%',
        position:'absolute',

        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center'
      }}
    ></LinearGradient>
     
      
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log("route.key", route);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: "tabLongPress",
        //     target: route.key,
        //   });
        // };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
            style={ options?.tabBarStyle }
          >
            {options?.tabBarIcon({ focused: isFocused })}
          </TouchableOpacity>
        );
      })}
     </View>
   
  );
}
