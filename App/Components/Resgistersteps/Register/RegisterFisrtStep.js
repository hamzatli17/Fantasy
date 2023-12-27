// ui
import React, { useState } from "react";
import { StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Button, Text, Input, Icon } from "@ui-kitten/components";
// components
import { ScreenContainer } from "../../ScreenContainer";
import { Formik } from "formik";
import { showToastError } from "../../Toast/index.js";
// localization
import { useTranslation } from "react-i18next";
// nav
import { useNavigation } from "@react-navigation/native";
// api
//import { login } from "../../../App/services/auth/index";

import Mdi_password from '../../../assets/Mdi_password.svg'

import Retour from '../../../assets/Vector.svg'
import Facebook from '../../../assets/Facebook.svg'
import User from '../../../assets/User.svg'
import Phone from '../../../assets/Phone.svg'



import GoogleLogo from '../../../assets/GoogleLogo.svg'

// redux
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../../../redux/actions/user";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const RegisterFirstStep = (props) => {
    //
    const { next, saveState, back, resetState } = props;

    const { replace, navigate, goBack } = useNavigation();
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
        saveState({
            email: values?.email,
            password: values?.password,
            phone: values?.phone

        });
        next();

        /*    login(
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
             }); */
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
                <Retour style={{ marginVertical: widthPercentageToDP('10%') }} />
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

                    <View style={{ flex: 1 }} >
                        <View style={{ flex: 1 }}>
                            <View style={{ alignSelf: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                <Text adjustsFontSizeToFit style={{ color: '#EBEBEF', marginVertical: widthPercentageToDP('10%') }} category="h4">
                                    Create an account
                                </Text>
                            </View>
                            <Input
                                style={{ marginVertical: widthPercentageToDP('2%') }}

                                status="primary"
                                accessoryLeft={() =>
                                    <User />}


                                placeholder='Name Or Username'
                                onBlur={handleBlur("userrname")}
                                value={values.userrname}
                                onChangeText={handleChange("username")}
                            />
                            <Input
                                style={{ marginVertical: widthPercentageToDP('2%') }}
                                status="primary"
                                accessoryLeft={() =>
                                    <Phone />}


                                placeholder="Phone number"
                                onBlur={handleBlur("phone")}
                                value={values.phone}
                                onChangeText={handleChange("phone")}
                            />
                            {/*  <Input
              
              status="primary"
              placeholder={t("LoginScreen.input.email.placeholder")}
              onBlur={handleBlur("email")}
              value={values.email}
              onChangeText={handleChange("email")}
            /> */}
                            <Input
                                style={{ marginVertical: widthPercentageToDP('2%') }}
                                status="primary"
                                accessoryLeft={() =>
                                    <Mdi_password />}
                                accessoryRight={getShowPasswordIcon()}
                                secureTextEntry={hidePassword}
                                placeholder={'Password'}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                onChangeText={handleChange("password")}
                            />
                            <Input
                                style={{ marginVertical: widthPercentageToDP('2%') }}
                                status="primary"
                                accessoryLeft={() =>
                                    <Mdi_password />}
                                accessoryRight={getShowPasswordIcon()}
                                secureTextEntry={hidePassword}
                                placeholder={'Confirm Password'}
                                onBlur={handleBlur("confirmPassword")}
                                value={values.confirmPassword}
                                onChangeText={handleChange("confirmPassword")}
                            />
                        </View>
                        <Button
                            appearance="filled"
                            style={{ marginVertical: widthPercentageToDP('2%'), bottom: 100 }}

                            status="primary"
                            size="small"
                            disabled={loading}
                            onPress={handleSubmit}
                        >
                            Create account
                        </Button>

                    </View>

                )}
            </Formik>
        </ScreenContainer>
    );
};
