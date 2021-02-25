import React from 'react'
import { View,Text,TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { darkBlue } from '../Constant/Colors';
import { Lato_Bold, Roboto_Medium } from '../Constant/FontFamily';

const AppButton =(props)=>{
 return(
     <TouchableOpacity 
     onPress={props.onPress}
     >
         <View style={[styles.wraper,props.btnWraper]}>
             <Text style={styles.buttonTitle}>
                 {props.title}
             </Text>
         </View>
     </TouchableOpacity>
 )
}
export default AppButton;
const styles = StyleSheet.create({
    wraper:{
    width:wp('92%'),
    backgroundColor:darkBlue,
    paddingVertical:15,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    },
    buttonTitle:{
        color:'white',
        fontSize:RFValue(16),
        fontFamily:Roboto_Medium,
    }
})