import React from "react";
import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { black, danger, darkBlue } from "../../Constant/Colors";
import { Lato_Black, Lato_Bold, Lato_Regular, Roboto_Medium, Roboto_Regular } from "../../Constant/FontFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mediumText, normalText, xlText } from "../../Constant/TextSize";
export default StyleSheet.create({
    wraper: {
        flex: 1
    },
    imgView:{
        marginTop:hp('5%')
    },
    imgStyle:{
    width:wp('100%'),
    height:hp('20%'),
    // width:200,height:200,

    resizeMode:'contain',
    },
    container: {
        flex: 1,
        // marginTop:hp('1%'),
        marginHorizontal: 15,
    },
    content: {
        marginTop: hp('4%')
    },
    xlText: {
        fontSize: RFValue(xlText),
        fontFamily: Roboto_Medium,
        textAlign: 'left',
        fontWeight: 'bold',
        color: darkBlue,
        // marginLeft:10,
    },
    mediunText: {
        color: black,
        fontSize: RFValue(14),
        fontFamily: Roboto_Regular
    },
    loginView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        fontFamily: Roboto_Regular,
        fontSize: RFValue(mediumText),
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: darkBlue,
        marginLeft:5
    },
    errorText:{
        color:danger,
        marginLeft:5,
        fontSize:RFValue(normalText),
        fontFamily:Lato_Bold,
    },
    textFieldMargin:{
        marginTop:2
    }
})