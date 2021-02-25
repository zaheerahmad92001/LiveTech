import { Container, Content ,Drawer } from 'native-base';
import React, { useState, useReducer, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Image ,StyleSheet,SafeAreaView} from 'react-native';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { login_user } from '../../Constant/StorageKey';
import { useSelector, useDispatch} from "react-redux";
import types from '../../Redux/Actions/types';
function Splash({ navigation }) {
    const dispatch = useDispatch();
    useEffect(() => {
      runApp()
    }, [])

    runApp = async()=>{
        let user = await AsyncStorage.getItem(login_user)
        setTimeout(() => {
            let item = JSON.parse(user)
            if(item){
                dispatch({
                    type:types.loginUser,
                    payload: item
                })
                navigation.dispatch(StackActions.replace('HomeNavigator'));
            }else{
                navigation.dispatch(StackActions.replace('Auth'));
            }
        },2000);
    }

return(
    <SafeAreaView 
    style={styles.container}
    // source={require('../../Constant/images/splash.png')}
    >
    <Image
    style={styles.imgStyle}
    source={require('../../Constant/images/logo.png')}
    >
    </Image>
    </SafeAreaView>
)
}
export default Splash;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        width:wp('95%'),
        height:hp('100%'),
        resizeMode:'contain',
       
    }
})