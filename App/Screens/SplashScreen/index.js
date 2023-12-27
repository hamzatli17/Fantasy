import React, { useState, useEffect, useRef } from "react";
import { View ,Image} from "react-native";
import { ScreenContainer } from "../../Components/ScreenContainer";
import FastImage from 'react-native-fast-image'

import { Button, Text, Input, Icon, Modal, Card } from "@ui-kitten/components";
export function SplashScreen({ onEnd }) {
  useEffect(() => {
    setTimeout(() => onEnd(), 2000);
  }, [1000]);

  return (
    <ScreenContainer withBoundaries>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FastImage style={{width:'100%',height:'100%'}} source={require('../../assets/Mask.png')} resizeMode="center" />

       
      </View>
    </ScreenContainer>
  );
}
