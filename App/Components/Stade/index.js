import React from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import Person from "../../assets/person.svg";
import Notification from "../../assets/notification.svg";
import { ThemeContext } from "../../theme/theme-context";
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Text } from "@ui-kitten/components";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";

export const Stade = ({ }) => {

  return (
    <ImageBackground
      source={require("../../assets/planStade.png")}
      style={{ flex: 1 }}
      resizeMode='stretch'
    >

      <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%') }}>
        <FastImage style={{ width: 56, height: 56 }} source={require('../../assets/maillotStade.png')} resizeMode="center" />
        <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10, marginVertical: '-0%' }}>
          <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
        </View>
        <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
          <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
        </View>
      </View>


      <View style={{ paddingHorizontal: widthPercentageToDP('1%'), width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: widthPercentageToDP('2%') }}>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), marginTop: widthPercentageToDP('-20%'), left: widthPercentageToDP('-6%') }}>
          <FastImage style={{ width: 56, height: 56 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), marginTop: widthPercentageToDP('-20%'), right: widthPercentageToDP('-6%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>


          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>


      </View>
      <View style={{ paddingHorizontal: widthPercentageToDP('1%'), width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), top: widthPercentageToDP('-18%'), left: widthPercentageToDP('-10%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), left: widthPercentageToDP('-10%'), top: widthPercentageToDP('-6%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), right: widthPercentageToDP('-10%'), top: widthPercentageToDP('-6%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>


          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), top: widthPercentageToDP('-18%'), right: widthPercentageToDP('-10%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>


          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>


      </View>
      <View style={{ paddingHorizontal: widthPercentageToDP('1%'), width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), left: widthPercentageToDP('-16%'), top: widthPercentageToDP('-16%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), top: widthPercentageToDP('-16%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>

          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginHorizontal: widthPercentageToDP('1%'), top: widthPercentageToDP('-16%'), right: widthPercentageToDP('-14%') }}>
          <FastImage style={{ width: 60, height: 60 }} source={require('../../assets/maillotStade.png')} resizeMode="center" ></FastImage>


          <View style={{ paddingVertical: 2, backgroundColor: '#02082F', borderRadius: 8, paddingHorizontal: 10 }}>
            <Text style={{ color: '#BEBCC9', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular', }}>S. Helal</Text>
          </View>
          <View style={{ paddingVertical: 1, backgroundColor: '#EEECF3', borderRadius: 10, width: 30, alignItems: 'center', paddingHorizontal: 4, borderColor: '#02082F', borderWidth: 1 }}>
            <Text style={{ color: '#02082F', fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Regular' }}>12</Text>
          </View>
        </View>



      </View>
    </ImageBackground>

  );
}
