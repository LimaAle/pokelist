import React from "react";
import { Platform, StatusBar, View } from "react-native";

export default function CustomStatusBar() {
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  return (
    <View style={{backgroundColor:'#21386E',height:STATUSBAR_HEIGHT}}>
      <StatusBar translucent backgroundColor={'#21386E'} barStyle='light-content'/>
    </View>
  )
}