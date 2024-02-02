import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Person from "../../assets/person.svg";
import Notification from "../../assets/notification.svg";
import { ThemeContext } from "../../theme/theme-context";
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Text } from "@ui-kitten/components";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Stade } from '../../Components/Stade'
import TransfertIcon from '../../assets/TransfertIcon.svg'
import FastImage from "react-native-fast-image";
import Star from '../../assets/Star.svg'
import EditSvg from '../../assets/EditSvg.svg'
import LogOut from '../../assets/LogOut.svg'

export const Profil = ({ navigation }) => {

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
                        Profile</Text>

                </View>
                <View style={{
                    paddingVertical: widthPercentageToDP('6%'),
                    backgroundColor: '#000034',
                    marginVertical: widthPercentageToDP('10%'),
                    borderRadius: 10,
                    marginHorizontal: widthPercentageToDP('8%'),
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: widthPercentageToDP('4%')
                }}>
                    <FastImage style={{ width: 80, height: 80 }} source={require('../../assets/profileApp.png')} resizeMode="contain" />
                    <View style={{ marginHorizontal: widthPercentageToDP('10%') }}>
                        <Text adjustsFontSizeToFit style={{ color: 'white' }} category="h4">
                            DARRAGI
                        </Text>
                        <Text adjustsFontSizeToFit style={{ color: 'white' }} category="h4">
                            SLIM
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Star />
                            <Text adjustsFontSizeToFit style={{ color: 'white', marginHorizontal: widthPercentageToDP('2%') }} category="p1">
                                1,256 points
                            </Text>

                        </View>
                    </View>

                </View>
                <View style={{
                    paddingVertical: widthPercentageToDP('2%'),
                    backgroundColor: '#EBE9EB',
                    // marginVertical: widthPercentageToDP('10%'),
                    borderRadius: 10,
                    marginHorizontal: widthPercentageToDP('8%'),
                  
                   // alignItems: 'center',
                    paddingHorizontal: widthPercentageToDP('4%')
                }}>
                    <Text adjustsFontSizeToFit style={{ color: '#000041' }} category="p1">
                    Team Name
                    </Text>
                    <Text adjustsFontSizeToFit style={{ color: '#000041' }} category="p2">
                    Fantazino FC
                    </Text>
                </View>
                <TouchableOpacity style={{
                    paddingVertical: widthPercentageToDP('2%'),
                    backgroundColor: '#EBE9EB',
                     marginVertical: widthPercentageToDP('2%'),
                    borderRadius: 10,
                    marginHorizontal: widthPercentageToDP('8%'),
                  flexDirection:'row',
                   alignItems: 'center',
                    paddingHorizontal: widthPercentageToDP('4%')
                }}>
                    <EditSvg/>
                    <Text adjustsFontSizeToFit style={{ color: '#000041' ,marginHorizontal:widthPercentageToDP('2%')}} category="p2">
                    Change team name
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingVertical: widthPercentageToDP('2%'),
                    backgroundColor: '#F0C6C6',
                     marginVertical: widthPercentageToDP('6%'),
                    borderRadius: 10,
                    marginHorizontal: widthPercentageToDP('8%'),
                  flexDirection:'row',
                   alignItems: 'center',
                    paddingHorizontal: widthPercentageToDP('4%')
                }}>
                    <LogOut/>
                    <Text adjustsFontSizeToFit style={{ color: '#000041' ,marginHorizontal:widthPercentageToDP('2%')}} category="p2">
                    Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
