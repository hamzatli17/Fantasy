import React ,{useState} from "react";
import { StyleSheet, TouchableOpacity, View, Image,FlatList } from "react-native";
import Person from "../../assets/person.svg";
import Notification from "../../assets/notification.svg";
import { ThemeContext } from "../../theme/theme-context";
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Text } from "@ui-kitten/components";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Stade } from '../../Components/Stade'
import TransfertIcon from '../../assets/TransfertIcon.svg'
import FastImage from "react-native-fast-image";
import Star from '../../assets/StarBlue.svg'

import styles from "./Styles/index";

export const Rankings = ({ navigation }) => {
    const [data, setData] = useState([
        {
          id: 1,
          name: "Foulen",
          image: require("../../assets/medal1.png"),
          logo: require("../../assets/logoLeague.png"),
          points: "1,256 points",
          rank:1
        },
        {
          id: 2,
          name: "Foulen",

          image: require("../../assets/medal2.png"),
          logo: require("../../assets/logoLeague.png"),
          points: "1,200 points",
          rank:2
        },
        {
          id: 3,
          name: "Foulen",

          image: require("../../assets/medal3.png"),
          logo: require("../../assets/logoLeague.png"),
          points: "1,100 points",
          rank:3
        },
        {
            id: 4,
            name: "Foulen",
            image: null,
            logo: require("../../assets/logoLeague.png"),
            points: "1,256 points",
            rank:4
          },
          {
            id: 5,
            name: "Foulen",
  
            image: null,
            logo: require("../../assets/logoLeague.png"),
            points: "1,200 points",
            rank:5
          },
          {
            id: 6,
            name: "Foulen",
  
            image: null,
            logo: require("../../assets/logoLeague.png"),
            points: "1,100 points",
            rank:123
          },
      ]);
    return (
        <View style={{ flex: 1, backgroundColor: '#F4F2F2', }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    paddingVertical: 20,
                    borderBottomRightRadius: 25,
                    backgroundColor: '#000317',
                    borderBottomLeftRadius: 25
                }}>
                    <Text style={{
                        color: '#EBEBEF',
                        fontSize: 22,
                        fontWeight: '600',
                        fontFamily: 'Poppins-Regular',
                        marginHorizontal: widthPercentageToDP('10%'), paddingVertical: 8
                    }}>
                        Ranking</Text>

                </View>

                <View style={{ marginHorizontal: widthPercentageToDP('4%'), marginVertical: widthPercentageToDP('4%') }}>
                    <Text adjustsFontSizeToFit style={{ color: 'white', color: '#000041' }} category="s1">
                        Let’s see your ranking
                    </Text>

                </View>
                <FlatList
            data={data}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <TouchableOpacity onPress={() => console.log(item)}>
                  <View style={styles.item}>
                    {item?.image!==null ?
                    <FastImage
                      style={{ width: 30, height: 30,marginHorizontal:4}}
                      source={item?.image}
                      resizeMode="contain"
                    />:
                    <Text
                    adjustsFontSizeToFit
                    style={{
                      color: "#000041",
                      fontSize: 16,
                      fontWeight: "400",
                      marginHorizontal:4
                    }}
                    category="h4"
                  >
                    {item?.rank}th
                  </Text>
                    }
                    <FastImage
                      style={{
                        width: 50,
                        height: 50,
                        marginHorizontal: widthPercentageToDP("2%"),
                      }}
                      source={item?.logo}
                      resizeMode="contain"
                    />
                    <View style={{ alignItems: "flex-start" }}>
                      <Text
                        adjustsFontSizeToFit
                        style={{
                          color: "#000041",
                          fontSize: 18,
                          fontWeight: "500",
                        }}
                        category="h4"
                      >
                        {item?.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          paddingVertical: 2,
                          alignItems: "center",
                        }}
                      >
                        <Star />
                        <Text
                          adjustsFontSizeToFit
                          style={{
                            color: "#000041",
                            fontSize: 16,
                            fontWeight: "400",
                            marginHorizontal:4
                          }}
                          category="h4"
                        >
                          {item?.points}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item?.id}
          />
              
            </View>

        </View>

    );
}
