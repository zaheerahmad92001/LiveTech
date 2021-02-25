import { Button, Icon } from 'native-base';
import React, { useState } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { darkBlue,blue } from '../Constant/Colors';
import { Lato_Bold, Roboto_Medium } from '../Constant/FontFamily';
import Ripple from 'react-native-material-ripple';

const HomeButton = (props) => {
    return (
        <Animatable.View
         animation={props.animation}
        >
            {/* <TouchableOpacity> */}
            <Ripple
            rippleColor="red"
            rippleDuration={800}
             onPress={props.onPress}
            >
                <View style={styles.container}>
                    <Icon
                        name={props.iconName}
                        type={props.iconType}
                        style={styles.iconStyle}
                    />
                    {/* <Image
                    style={{width:40,height:40,}}
                    source={require('../Constant/images/inquiries.png')}
                    /> */}
                   
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                </Ripple>
            {/* </TouchableOpacity> */}
        </Animatable.View>
    )
}
export default HomeButton;
const styles = StyleSheet.create({
    container: {
        backgroundColor: blue,
        paddingTop:25,
        paddingBottom:15,
        // width: wp('29%'),
        width:wp('45%'),
        height:hp('20%'),
        borderRadius: 5,
        borderWidth:1.5,
        borderColor:darkBlue,
        alignItems: 'center'
    },
    
    iconStyle:{
        color:'white',
        fontSize:RFValue(50)
    },
    title:{
        color:'white',
        marginTop:20,
        fontFamily:Roboto_Medium,
        fontSize:RFValue(16)
        // fontFamily:Lato_Bold
    }
})