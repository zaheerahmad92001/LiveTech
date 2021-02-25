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
import { useSelector, useDispatch } from "react-redux";
import types from '../../Redux/Actions/types';

function Home({ navigation }) {
    const counter = useSelector(state => state.reducersHandler);
    // const dispatch = useDispatch();
    const drawerRef = useRef();


    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '', email: '', phone: '', password, confirmPass: '',
            showpass: true, showConfirmpass: true,
        }
    )
    const { name, email, phone, password, confirmPass, showpass, showConfirmpass } = state

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            callMe()
          });
          return unsubscribe;
    }, [navigation])

    callMe=()=>{
        console.log('call when focus on this screen')
    }

    openDrawer = () => {
        setTimeout(() => {
        //     this.drawer && this.drawer._root && this.drawer._root.open();
         drawerRef.current._root.open()
        }, 500)
        // await console.log('dr',drawerRef.current._root.open())
    };

    closeDrawer = () => {
        drawerRef.current._root.close()
        // this.drawer && this.drawer._root && this.drawer._root.close();
    };

    onPressHandler=(value)=>{
     navigation.navigate(value)
    }


    return (
        <Drawer
            // ref={(ref) => this.drawer = ref}
            ref={drawerRef}
            content={<Sidebar navigation={navigation} drawerClose={closeDrawer} />}
            navigation={navigation}
            onClose={closeDrawer}
            panOpenMask={0.2}
            negotiatePan={true}
            tapToClose={true}
        //side='right'
        >
            <SafeAreaView style={styles.wraper}>
                <AppHeader
                    body="HOME"
                    leftIconName={'md-menu'}
                    leftIconType={'Ionicons'}
                    leftPress={() => { openDrawer() }}
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
                                animation={'slideInDown'}
                                title={'Get help'}
                                iconName={'ios-help-circle-outline'}
                                iconType={'Ionicons'}
                                onPress={()=> onPressHandler('GetHelp')}

                            />
                            <HomeButton
                                animation={'fadeInDownBig'}
                                title={'Share Video'}
                                iconName={'ios-share-social-outline'}
                                iconType={'Ionicons'}
                                onPress={()=> onPressHandler('shareVideo')}
                            />
                        </View>
                        <View style={[styles.buttonContainer, { marginTop: 15 }]}>

                            <HomeButton
                                animation={'fadeInDownBig'}
                                title={'Chat With Support'}
                                iconName={'chatbox-ellipses-outline'}
                                iconType={'Ionicons'}
                                onPress={()=> onPressHandler('chatwithSupport')}
                            />
                            <HomeButton
                                animation={'fadeInRight'}
                                title={'Upload Photos'}
                                iconName={'md-cloud-upload-outline'}
                                iconType={'Ionicons'}
                                onPress={()=> onPressHandler('UploadPhote')}

                            />
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </Drawer>
    )}

export default Home;  