// ui
import React, { useState } from "react";
import { StyleSheet, View, Pressable,Image } from "react-native";
import { Button, Text, Input, Icon } from "@ui-kitten/components";
// components
import { ScreenContainer } from "../../Components/ScreenContainer";
import { Formik } from "formik";
import { showToastError } from "../../Components/Toast/index.js";
// localization
import { useTranslation } from "react-i18next";
// nav
import { useNavigation } from "@react-navigation/native";
// api
import { login } from "../../../App/services/auth/index";
// redux
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../../redux/actions/user";
import FastImage from 'react-native-fast-image'
import LinearGradient from "react-native-linear-gradient";

import LogoType from '../../assets/Logotype.svg'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export const Welcome = () => {
  //
  const { replace, navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState(false);
  const [loading, setLoading] = useState(false);

  // localization
  const { t } = useTranslation(["Auth"]);

 

  const handleOnSubmit = (values, actions) => {
    setLoading(true);
    login(
      values.email,
      values.password,
      !userType ? "particulier" : "prestataire"
    )
      .then((res) => {
        setLoading(false);
        if (res.success) {
          AsyncStorage.setItem("id", res?.data?.user.data.ID);
          AsyncStorage.setItem("token", res?.data?.token);
          dispatch(setUser(res?.data?.user));
          replace("Home");
        }
      })
      .catch((err) => {
        setLoading(false);
        showToastError(t("LoginScreen.error"), err.data.message);
        console.log("login error", err.data.message);
      });
  };

  

  return (
    <ScreenContainer withBoundaries>
           <View style={{  justifyContent: "center", alignItems: "center",marginVertical:wp('20%') }}>
        <FastImage style={{width:120,height:100}} source={require('../../assets/Mask.png')} resizeMode="contain" />
        <FastImage style={{width:240,height:100}} source={require('../../assets/logotype.png')} resizeMode="contain" />

  
        </View>
        <View style={{  marginVertical:wp('20%') }}>
        <Text category='p1'   style={{color:'white',fontSize:32,fontWeight:'400',fontFamily:'MonumentExtended-Regular'}}>
        Welcome to Fantazino
        </Text >
        <Text style={{color:'white',fontSize:16,fontWeight:'400'}}>
        Take the chance to build the team of your dream and collect score. 
        </Text >
       
      

  
        </View>
        <LinearGradient
      colors={["#BEBED1", "#9494E3"]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{
        borderRadius: 10,

       

     

    
      }}
    >
             
        <Button    appearance="filled"  status="primary" size="small" onPress ={()=>navigate('Login')} style={{bottom:0}}>Get started</Button>
        </LinearGradient>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
    },
  });