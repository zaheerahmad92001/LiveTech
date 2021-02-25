import { Container, Content, Drawer } from 'native-base';
import React, { useRef, useReducer, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, Image } from 'react-native';
import AppHeader from '../../Component/Header';
import InputField from '../../Component/InputField';
import AppButton from '../../Component/AppButton';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeButton from '../../Component/HomeButton';
import Sidebar from '../../Component/Sidebar/menu';
function GetHelp({ navigation }) {

    useEffect(() => {
       
    }, [])
    goBack=()=>{
        navigation.pop()
    }
    onPressHandler=(value)=>{
        navigation.navigate(value)
    }
    return (
        <SafeAreaView style={styles.wraper}>
            <AppHeader
                body="GET HELP"
                leftIconName={'keyboard-backspace'}
                leftIconType={'MaterialIcons'}
                leftPress={() => { goBack() }}
            />
            <View style={styles.container}>

                <View style={styles.logoView}>
                    <Image
                        resizeMode={'contain'}
                        style={styles.logo}
                        source={require('../../Constant/images/bdr1.png')}
                    />
                </View>

                <View style={{
                    flex: 1,
                    marginHorizontal: 15,
                    justifyContent: "center"
                }}>
                    <View style={styles.buttonContainer}>

                        <HomeButton
                            animation={'slideInLeft'}
                            title={'New Ticket'}
                            iconName={'fiber-new'}
                            iconType={'MaterialIcons'}
                            onPress={() => onPressHandler('CreateTicket')}

                        />
                        <HomeButton
                            animation={'fadeInRight'}
                            title={'View Ticket'}
                            iconName={'eye'}
                            iconType={'FontAwesome'}
                            onPress={() => onPressHandler('ViewTicket')}
                        />
                    </View>
                    <View style={[styles.buttonContainer, { marginTop: 15 }]}>

                        <HomeButton
                            animation={'fadeInLeft'}
                            title={'Update Ticket'}
                            iconName={'update'}
                            iconType={'MaterialIcons'}
                            // onPress={() => onPressHandler('chatwithSupport')}
                        />
                        <HomeButton
                            animation={'fadeInRight'}
                            title={'Quick Chat'}
                            iconName={'chatbox-ellipses-outline'}
                            iconType={'Ionicons'}
                            // onPress={() => onPressHandler('UploadPhote')}

                        />
                    </View>

                </View>

            </View>
        </SafeAreaView>
    )}
    export default GetHelp;