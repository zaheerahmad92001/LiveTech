import React from 'react';
import {StyleSheet,Text,View}from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { black } from '../Constant/Colors';
import { Roboto_Medium } from '../Constant/FontFamily';
import { mediumText, normalText } from '../Constant/TextSize';
export const MediumHeading =(props)=>{
    return(
        
        <Text style={[styles.textStyle,props.mediumTextStyle]}>{props.text}</Text>
        
    )
}
export default MediumHeading ;
const styles = StyleSheet.create({
    textStyle:{
        color:black,
        fontFamily:Roboto_Medium,
        fontSize:RFValue(normalText),
        marginBottom:RFValue(5)
    }
})