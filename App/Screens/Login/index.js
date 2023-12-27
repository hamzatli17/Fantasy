// ui
import React, { useState } from "react";
import { StyleSheet, View, Pressable,TouchableOpacity } from "react-native";
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

import Mdi_password from '../../assets/Mdi_password.svg'

import Retour from '../../assets/Vector.svg'
import User from '../../assets/User.svg'

import Facebook from '../../assets/Facebook.svg'

import GoogleLogo from '../../assets/GoogleLogo.svg'

// redux
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../../redux/actions/user";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const Login = () => {
  //
  const { replace, navigate ,goBack} = useNavigation();
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState(false);
  const [loading, setLoading] = useState(false);

  // localization
  const { t } = useTranslation(["Auth"]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aliceblue",
    },
  });

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

  function getShowPasswordIcon() {
    return (
      <Pressable
        style={styles.eye}
        onPress={() => setHidePassword(!hidePassword)}
      >
        <Icon name={hidePassword ? "eye-off" : "eye"} fill={"gray"} />
        {/* */}
      </Pressable>
    );
  }

  return (
    <ScreenContainer withBoundaries>
       <TouchableOpacity onPress={() => goBack()}>
            <Retour  style={{marginVertical:widthPercentageToDP('10%')}}/>
            </TouchableOpacity >
      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
        }) => (
        
            <View style={{  marginVertical:widthPercentageToDP('30%') }}>
            <Text adjustsFontSizeToFit style={{color:'#EBEBEF',marginVertical:widthPercentageToDP('10%'),alignSelf:'center'}} category="h4">
            Sign in to get started 
            </Text>
            <Input
             accessoryLeft={()=>       
              <User/>}
              style={{marginVertical:widthPercentageToDP('2%')}}
              status="primary"
              placeholder={'Email Adress '}
              onBlur={handleBlur("email")}
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <Input
              status="primary"
              accessoryLeft={()=>       
              <Mdi_password/>}
              accessoryRight={getShowPasswordIcon()}
              secureTextEntry={hidePassword}
              placeholder={'Password'}
              onBlur={handleBlur("password")}
              value={values.password}
              onChangeText={handleChange("password")}
            />
            <View
                style={{
                  alignItems: "flex-end",
                  marginVertical: "5%",
                }}
              >
                <Text
                  adjustsFontSizeToFit
                  style={{
                    alignItems: "flex-end",
                    color: "#3F3766",
                    // textDecorationLine: "underline",
                  }}
                  onPress={() => navigate("MotDePasseOublie")}
              
                >
                  Forgot password
                </Text>
              </View>
            <Button
              appearance="filled"
              style={{marginVertical:widthPercentageToDP('2%')}}
           
              status="primary"
             size="small"
              disabled={loading}
              onPress={handleSubmit}
            >
              Sign in
            </Button>
            <Text
              adjustsFontSizeToFit
              style={{
                alignSelf: "center",
                color: "#3F3766",
                // textDecorationLine: "underline",
              }}
            
              category="p1"
            >
               OR
            </Text>
            <Button
            accessoryLeft={()=>       
              <Facebook/>}
              appearance="filled"
              style={{marginVertical:widthPercentageToDP('2%')}}
           
              status="primary"
             size="small"
              disabled={loading}
         
            >
             Login with Facebook
            </Button>
            <Button
            accessoryLeft={()=>       
              <GoogleLogo/>}
              appearance="filled"
              style={{marginVertical:widthPercentageToDP('2%')}}
           
              status="primary"
             size="small"
              disabled={loading}
     
            >
              Login with Google
            </Button>
            <Text
              adjustsFontSizeToFit
              style={{
                alignSelf: "center",
                color: "#EBEBEF",
                marginVertical:widthPercentageToDP('2%')
                // textDecorationLine: "underline",
              }}
            onPress={()=>{navigate('Register')}}
              category="p1"
            >
             Create an account
            </Text>
            </View>
       
        )}
      </Formik>
    </ScreenContainer>
  );
};
