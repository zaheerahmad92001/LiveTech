import { Container, Content } from 'native-base';
import React, { useState, useReducer, useEffect } from 'react'
import { View, Text, TextInput, ActivityIndicator,Image } from 'react-native';
import AppHeader from '../../Component/Header';
import InputField from '../../Component/InputField';
import AppButton from '../../Component/AppButton';
import { StackActions } from '@react-navigation/native';
import { BaseUrl } from '../../Constant/serverConfig'
import AuthModal from '../../Utils/Modal/Auth'
import { ValidateEmail } from '../../Component/RandomFun'

// import { TextInput } from 'react-native-paper';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { darkBlue } from '../../Constant/Colors';
// import ValidationComponent from 'react-native-form-validator';

function SignUp({ navigation }) {

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),

        {
            name: '', email: '', phone: '', password, confirmPass: '',
            showpass: true, showConfirmpass: true, error: false,
            errorMsg: '', saving: false,
        }
    )
    const { name, email, phone, password, confirmPass, showpass, showConfirmpass,
        error, errorMsg, saving } = state

    useEffect(() => {

    }, [])

    showPassword = (value) => {
        updateState({ showpass: !value })
    }
    showConfirmPassword = (value) => {
        updateState({ showConfirmpass: !value })
    }
    createAccount = () => {
        //  navigation.dispatch(StackActions.replace('HomeNavigator'));
        // console.log('name',name.toLowerCase())
        let URL = `${BaseUrl}signup`
        let data = ''
        if (name.trim().length >= 2) {
            if (ValidateEmail(email)) {
                if (password.trim().length >= 6) {
                    if (password === confirmPass) {
                        updateState({ saving: true })
                        data = {
                            name: name,
                            email: email.toLowerCase(),
                            password: password
                        }
                        AuthModal.SignUp(URL, data).then((res) => {
                            console.log('res', res.message)
                            if (res.message === 'User Created Successfully!') {
                                updateState({ saving: false,name:'',email:'',password:'',confirmPass:'' })
                                navigation.navigate('Login')
                            } else {
                                console.log('res error', res.email[0])
                                updateState({saving:false, error:true, errorMsg:res.email[0]})
                            }
                        }).catch((error) => {
                            console.log('error', error)
                        })
                    } else {
                        updateState({ error: true, errorMsg: 'Password not match' })
                    }

                } else {
                    updateState({ error: true, errorMsg: 'Password must be atleast 6 charaters' })
                }
            } else {
                updateState({ error: true, errorMsg: 'Email badly formated' })
            }
        } else {
            updateState({ error: true, errorMsg: 'User Name must be atleast 2 characters' })
        }





    }
    Login = () => {
        navigation.navigate('Login')
    }
    return (
        <Container style={styles.wraper}>
            <AppHeader
                leftPress={() => navigation.pop()}
                leftIconName={'keyboard-backspace'}
                leftIconType={'MaterialIcons'}
            />
            <Content 
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            
                <Text style={styles.xlText}>Create Account</Text>
                <Text style={styles.largeText}>Create a new  account</Text>
                <View style={styles.content}>
                    <InputField
                        placeholder={'John Doe'}
                        keyboardType={'default'}
                        onChangeText={(e) => updateState({ name: e, error: false })}
                        value={name}
                        label={"Name"}
                        iconName={'user'}
                        iconType={'AntDesign'}
                    />
               <View style={styles.textFieldMargin}>
                    <InputField
                        placeholder={'LiveTech@test.com'}
                        keyboardType={'email-address'}
                        onChangeText={(e) => updateState({ email: e, error: false })}
                        value={email}
                        label={"Email"}
                        iconName={'email-outline'}
                        iconType={'MaterialCommunityIcons'}
                    />
                    </View>
                    <View style={styles.textFieldMargin}>
                    <InputField
                        placeholder={'+12345678999'}
                        keyboardType={'number-pad'}
                        onChangeText={(e) => updateState({ phone: e, error: false })}
                        value={phone}
                        label={"Phone "}
                        iconName={'old-mobile'}
                        iconType={'Entypo'}
                    />
                    </View>
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
                    <View style={styles.textFieldMargin}>
                    <InputField
                        placeholder={'*********'}
                        keyboardType={'default'}
                        onChangeText={(e) => updateState({ confirmPass: e, error: false })}
                        value={confirmPass}
                        secureTextEntry={showConfirmpass}
                        label={"Confirm Password "}
                        iconName={showConfirmpass ? 'eye-off-outline' : 'eye-outline'}
                        iconType={'Ionicons'}
                        iconPress={()=>showConfirmPassword(showConfirmpass)}
                    />
                    </View>
                    {error ?
                        <Text style={styles.errorText}>{`* ${errorMsg}`}</Text>
                        : null}
                    <View style={{ marginTop: 20 }}>
                        {saving ?
                            <ActivityIndicator
                                size={'small'}
                                color={darkBlue}
                            /> :
                            <AppButton
                                title="CREATE ACCOUNT"
                                onPress={() => createAccount()}
                            />
                        }
                    </View>
                    <TouchableOpacity
                        style={{ marginBottom: 20, marginTop: 10 }}
                        onPress={() => Login()}
                    >
                        <View style={styles.loginView}>
                            <Text style={styles.mediunText}>Already have an account</Text>
                            <Text style={styles.login}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <TextInput
      label="Email"
      mode={'outlined'}
      underlineColor={"transparent"}
      theme={{ colors: { placeholder: 'red', text: 'black', primary: 'red',underlineColor:'transparent',background : 'yellow'}}}
      style={{backgroundColor:'white',}}
    //   value={text}
    //   onChangeText={text => setText(text)}
    /> */}


            </Content>
        </Container>
    )
}
export default SignUp