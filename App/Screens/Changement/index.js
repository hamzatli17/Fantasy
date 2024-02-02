import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Person from "../../assets/person.svg";
import Notification from "../../assets/notification.svg";
import { ThemeContext } from "../../theme/theme-context";
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Text } from "@ui-kitten/components";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Stade } from '../../Components/StadeTransfert'
import TransfertIcon from '../../assets/TransfertIcon.svg'
import FastImage from "react-native-fast-image";

export const Changement = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F2F2' }}>
      <View style={{ flex: 1 }}>
        <View style={{ paddingVertical: 20, borderBottomRightRadius: 25, backgroundColor: '#000317', borderBottomLeftRadius: 25 }}>
          <Text style={{ color: '#EBEBEF', fontSize: 22, fontWeight: '600', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('10%'), paddingVertical: 8 }}>Fantazino FC</Text>
        </View>
        <View style={{ backgroundColor: '#F4F2F2', marginVertical: widthPercentageToDP('16%'), marginHorizontal: widthPercentageToDP('10%'), paddingVertical: 10, width: widthPercentageToDP('36%'), borderRadius: 25, borderWidth: 1, borderColor: '#02082F', zIndex: 1, position: 'absolute', flexDirection: 'row', paddingHorizontal: widthPercentageToDP('1%') }}>
          <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '400', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('2%') }}>My points :</Text>
          <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('1%') }}>156</Text>

        </View>
        <View style={{ backgroundColor: '#F4F2F2', marginVertical: widthPercentageToDP('16%'), marginHorizontal: widthPercentageToDP('52%'), paddingVertical: 10, width: widthPercentageToDP('42%'), borderRadius: 25, borderWidth: 1, borderColor: '#02082F', zIndex: 1, position: 'absolute', paddingHorizontal: widthPercentageToDP('1%'), flexDirection: 'row' }}>
          <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '400', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('2%') }}>Highest score :</Text>
          <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('1%') }}>156</Text>


        </View>
        <View style={{ alignItems: 'center', marginTop: widthPercentageToDP('8%') }}>
          <Text style={{ color: '#02082F', fontSize: 16, fontWeight: '500', fontFamily: 'Poppins-Regular', marginHorizontal: widthPercentageToDP('1%') }}>Gameweek 6</Text>
        </View>
        <Stade />
      </View>
     
    </View>
  );
}
