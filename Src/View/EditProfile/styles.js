import React from "react";
import { StyleSheet,Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { black, danger, darkBlue } from "../../Constant/Colors";
import { Lato_Black, Lato_Bold, Lato_Regular, Roboto_Medium, Roboto_Regular } from "../../Constant/FontFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mediumText, normalText, xlText } from "../../Constant/TextSize";
export default StyleSheet.create({
    wraper: {
        flex: 1
    },
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    
    content: {
        marginTop: hp('1.3%')
    },
    imgView:{
        width:RFValue(100),
        height:RFValue(100),
        borderRadius:RFValue(50),
        backgroundColor:'black',
        alignSelf:'center',
        marginTop:RFValue(20),
        overflow:"hidden"
    },
    editIconHolder:{
    top:-30,
    right:-40,
    zIndex:1,
    backgroundColor:darkBlue,
    width:RFValue(25),
    height:RFValue(25),
    borderRadius:RFValue(25/2),
    alignSelf:"center",
    justifyContent:'center'

    },
    iconStyle:{
        fontSize:RFValue(20),
        color:'white',
        alignSelf:'center'
    },
    textFieldMargin:{
        marginTop:2
    },
    appButtonContainer:{
        marginTop:Platform.OS==='android'? 15:20,
    },
    errorText:{
        color:danger,
        marginLeft:5,
        fontSize:RFValue(normalText),
        fontFamily:Lato_Bold,
    },
})