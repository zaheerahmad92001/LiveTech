import { Container, Content } from 'native-base';
import React, { useState, useReducer, useEffect } from 'react'
import { View, Text, TextInput, ActivityIndicator,Image } from 'react-native';
import AppHeader from '../../Component/Header';
import InputField from '../../Component/InputField';
import AppButton from '../../Component/AppButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { ValidateEmail } from '../../Component/RandomFun';
import { StackActions } from '@react-navigation/native';
import AuthModal from '../../Utils/Modal/Auth';
import { BaseUrl } from '../../Constant/serverConfig';
import { darkBlue } from '../../Constant/Colors';
import { useSelector, useDispatch} from "react-redux";
import types from '../../Redux/Actions/types';


function Login({ navigation }) {
    const dispatch = useDispatch();

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { email: '', password: '', showpass: true, error: false, errorMsg: '', saving: false }
    )
    const { email, password, showpass, error, errorMsg, saving } = state

    useEffect(() => {

    }, [])

    showPassword = (value) => {
        updateState({ showpass: !value })
    }

    SignIn = () => {
        let URL = `${BaseUrl}login`
        let data = {
            email: email.toLowerCase(),
            password: password
        }
        if (ValidateEmail(email)) {
            if (password.trim().length >= 6) {
                updateState({ saving: true })
                AuthModal.Login(URL, data).then((res) => {
                    if(res.success){
                        dispatch({
                            type:types.loginUser,
                            payload: res
                        })
                    // console.log('res data', res)
                    updateState({ saving: false,email:'',password:'' })
                    navigation.dispatch(StackActions.replace('HomeNavigator'));
                    }
                    
                }).catch((err) => {
                    console.log('error', err)
                    updateState({ saving: false })
                })
            } else {
                updateState({ error: true, errorMsg: 'Please check your email or password' })
            }
        } else {
            updateState({ error: true, errorMsg: 'Please check your email or password' })
        }
    }
    SignUp = () => {
        navigation.navigate('SignUp')
    }
    return (
        <Container>
            
            <Content style={styles.container}>
                <View style={styles.imgView}>
                    <Image
                    style={styles.imgStyle}
                    source={require('../../Constant/images/logo.png')}
                    />
                </View>
                <Text style={styles.xlText}>Login </Text>
                <View style={styles.content}>
                    <InputField
                        placeholder={'LiveTech@test.com'}
                        keyboardType={'email-address'}
                        onChangeText={(e) => updateState({ email: e, error: false })}
                        value={email}
                        label={"Email"}
                        iconName={'email-outline'}
                        iconType={'MaterialCommunityIcons'}
                    />
                    <View style={styles.textFieldMargin}>
                    <InputField
                        placeholder={'*********'}
                        keyboardType={'default'}
                        onChangeText={(e) => updateState({ password: e, error: false })}
                        value={password}
                        secureTextEntry={showpass}
                        label={"Password "}
                        iconName={showpass ? 'eye-off-outline' : 'eye-outline'}
                        iconType={'Ionicons'}
                        iconPress={() => showPassword(showpass)}
                    />
                    </View>
                    {error ?
                        <Text style={styles.errorText}>{`* ${errorMsg}`}</Text>
                        : null}
                    <View style={{ marginTop: 25 }}>
                        {saving ?
                            <ActivityIndicator
                                color={darkBlue}
                                size={'small'}
                            /> :
                            <AppButton
                                title="LOGIN"
                                onPress={() => SignIn()}
                            />
                        }
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => SignUp()}
                    >
                        <View style={styles.loginView}>
                            <Text style={styles.mediunText}>Dont have an account</Text>
                            <Text style={styles.login}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}
export default Login;