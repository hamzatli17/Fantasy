// ui
import React, { useState } from "react";
import { StyleSheet, View, Pressable, TouchableOpacity,FlatList } from "react-native";
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

import FastImage from 'react-native-fast-image'


import GoogleLogo from '../../../assets/GoogleLogo.svg'

// redux
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../../../redux/actions/user";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const RegisterSecondStep = (props) => {
    //
    const { next, saveState, back, resetState } = props;

    const { replace, navigate, goBack } = useNavigation();
    const dispatch = useDispatch();
    const [hidePassword, setHidePassword] = useState(true);
    const [userType, setUserType] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Club Africain',
            image: require('../../../assets/clubAfricain.png')
        },
        {
            id: 2,
            name: 'Stade Tunisien',
            image: require('../../../assets/stade.png')
        },
        {
            id: 3,
            name: 'Etoile Sahel',
            image: require('../../../assets/etoile.png')
        }
        ,
        {
            id: 4,
            name: 'Olympique Beja',
            image: require('../../../assets/beja.png')
        },
        {
            id: 5,
            name: 'Ben Guerdane',
            image: require('../../../assets/benguerdan.png')
        },
        {
            id: 6,
            name: 'Gafsa',
            image: require('../../../assets/gafsa.png')
        },
        {
            id: 7,
            name: 'Soliman',
            image: require('../../../assets/sliman.png')
        },
        {
            id: 8,
            name: 'Esperance Tunis',
            image: require('../../../assets/esperance.png')
        },
        {
            id: 9,
            name: 'Monastir',
            image: require('../../../assets/mestir.png')
        },
        {
            id: 10,
            name: 'CS Sfax',
            image: require('../../../assets/sfax.png')
        },
        {
            id: 11,
            name: 'Bizertin',
            image: require('../../../assets/bizerte.png')
        },
        {
            id: 12,
            name: 'Metlaoui',
            image: require('../../../assets/metloui.png')
        },
        {
            id: 13,
            name: 'US Tataouine',
            image: require('../../../assets/tataouine.png')
        },
        {
            id: 14,
            name: 'Marsa',
            image: require('../../../assets/marsa.png')
        }

    ]);

    const [selectedTeam, setSelectedTeam] = useState(null);

    // localization
    const { t } = useTranslation(["Auth"]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "aliceblue",
        },
    });

    const onPress =(item)=>{
        setSelectedTeam(item)
    }
    const handleOnSubmit = (values, actions) => {
        setLoading(true);
        saveState({
            equipe: selectedTeam,
          

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
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => back()}>
                <Retour style={{ marginVertical: widthPercentageToDP('10%') }} />
                <Text adjustsFontSizeToFit style={{ color: '#EBEBEF', marginVertical: widthPercentageToDP('10%'), marginHorizontal: widthPercentageToDP('10%') }} category="c1">
                    Select your favourite team
                </Text>
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
                            <FlatList
                                data={data}
                                vertical
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    console.log("items", item);
                                    return (
                                        <TouchableOpacity onPress={()=> onPress(item)}>
                                        <View style={{ backgroundColor: selectedTeam?.id===item?.id?'#BEBED1': '#2B234F', paddingVertical: widthPercentageToDP('8%'), borderRadius: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: widthPercentageToDP('6%'),marginVertical: widthPercentageToDP('2%') }}>
                                            <FastImage style={{ width: 50, height: 50 }} source={item?.image} resizeMode="contain" />
                                            <Text adjustsFontSizeToFit style={{ color:  selectedTeam?.id===item?.id?'#0F0830':'#EBEBEF', marginHorizontal: widthPercentageToDP('10%') }} category="h4">
                                              {item?.name}
                                            </Text>
                                        </View>
                                        </TouchableOpacity>
                                    );
                                }}
                                keyExtractor={(item) => item?.id}
                            />


                        </View>
                        <Button
                            appearance="filled"
                            style={{ marginVertical: widthPercentageToDP('2%'), bottom: 0 }}
                            disabled={selectedTeam === null}
                            status="primary"
                            size="small"
                           /// disabled={loading}
                            onPress={handleSubmit}
                        >
                           Next
                        </Button>

                    </View>

                )}
            </Formik>
        </ScreenContainer>
    );
};
