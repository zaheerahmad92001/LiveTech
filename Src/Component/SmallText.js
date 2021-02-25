import React from 'react';
import {StyleSheet,Text,View}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { black } from '../Constant/Colors';
import { Roboto_Light, Roboto_Medium, Roboto_Regular } from '../Constant/FontFamily';
import { mediumText, normalText } from '../Constant/TextSize';
export const SmallText =(props)=>{
    return(

        <Text style={[styles.textStyle,props.smallTextStyle]}>{props.text}</Text>
      )
}
export default SmallText ;
const styles = StyleSheet.create({
    textStyle:{
        color:black,
        fontFamily:Roboto_Light,
        fontSize:RFValue(normalText),
        marginBottom:RFValue(5)
    }
})