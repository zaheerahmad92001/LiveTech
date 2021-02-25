import { Container, Content } from 'native-base';
import React, { useState, useReducer, useEffect } from 'react'
import { View, Text, TextInput, ActivityIndicator, Image } from 'react-native';
import AppHeader from '../../Component/Header';
import { Icon } from 'native-base';
import InputField from '../../Component/InputField';
import AppButton from '../../Component/AppButton';
import { StackActions } from '@react-navigation/native';
import { BaseUrl ,imgbaseUrl } from '../../Constant/serverConfig'
import AuthModal from '../../Utils/Modal/Auth'
import { ValidateEmail } from '../../Component/RandomFun'
import { useSelector, useDispatch} from "react-redux";
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { darkBlue } from '../../Constant/Colors';
import ImageResizer from 'react-native-image-resizer';
import {options}from '../../Constant/StorageKey'


function EditProfile({ navigation }) {
    
    const user = useSelector(state => state.reducersHandler.userInfo);
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '', email: '', phone: '', whatsapp: '',user_id:'',  error: false,
            errorMsg: '', saving: false,profile_pic:'',imgUri:'',filePath:''
        }
    )
    const { name, email, phone, whatsapp,profile_pic,imgUri,filePath,
        user_id,error, errorMsg, saving } = state

    useEffect(() => {
        // const user = useSelector(state => state.reducersHandler.userInfo);
       updateState({
           name:user.user.name,
           user_id:user.user.id,
           email:user.user.email,
           phone:user.user.sms,
           whatsapp:user.user.whatsapp,
           profile_pic:user.user.profile_pic
         })
    
    }, [])

selectImage =()=>{
    
    ImagePicker.showImagePicker(options, response => {
        let rotation = 0;
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log(
            'User tapped custom button: ',
            response.customButton
          );
          alert(response.customButton);
        } else {
            if (response.originalRotation === 90) {
                rotation = 90;
              } else if (response.originalRotation === 270) {
                rotation = -90;
              }
            let { uri } = response;
            ImageResizer.createResizedImage(
                uri,
                150,
                150,
                'JPEG',
                70,
                rotation
                )
            .then(res => {
              console.log('response of image',res)
            updateState({filePath:res , imgUri:res.uri})

            })
            .catch(err => {
             console.log('error in image resizing',err)
            });

            // updateState({filePath:response , imgUri:response.uri})
            
        }
     });
    }
// console.log('img',imgbaseUrl+profile_pic)
    updateProfile=()=>{
        let URL = `${BaseUrl}edit_profile`
        let data  = new FormData()
        data.append('name',name)
        data.append('user_id',user_id)
        data.append('email',email.toLowerCase())
        data.append('profile_pic',filePath)
        // data.append('profile_pic',{ uri:filePath.uri , type:filePath.type, name:filePath.fileName , data:filePath.data })
        data.append('sms',phone)
        
        if(ValidateEmail(email)){
          if(name.trim().length >0){
              if(filePath){
               updateState({saving:true})
             AuthModal.UpdateProfile(URL , data).then((res)=>{
                 if(res.success){
                    console.log('data update successfuly',res)
                    user.user = res.user
                    updateState({saving:false})
                 }else{
                    updateState({saving:false})
                     console.log('something went wrong',res)
                 }
                 
             }).catch((error)=>{
                 console.log('errro',error)
             })
            }else{
                updateState({errorMsg:"Please select image ",error:true})
            }
          }else{
              updateState({errorMsg:"Name is required",error:true})
          }
        }else{
            updateState({errorMsg:"Valid email is required",error:true})
        }
    }

    return (
        <Container style={styles.wraper}>
            <AppHeader
                leftPress={() => navigation.pop()}
                leftIconName={'keyboard-backspace'}
                leftIconType={'MaterialIcons'}
                body={'Edit Profile'}
            />
            <Content
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <TouchableOpacity
                onPress={selectImage}
                >
                 
                    <View>
                    <View style={styles.imgView}>
                    { imgUri ?
                        <Image
                            style={{ width: null, height: null, flex: 1 }}
                            source={{uri:imgUri}}
                        />:profile_pic ?
                        <Image
                        style={{ width: null, height: null, flex: 1 }}
                        source={{uri:imgbaseUrl+profile_pic}}
                       />:
                       <Image
                        style={{ width: null, height: null, flex: 1 }}
                        source={require('../../Constant/images/loginuser.jpg')}
                       />

                    }
                    </View>
                    <View style={styles.editIconHolder}>
                        <Icon
                            name={'edit'}
                            type={'MaterialIcons'}
                            style={styles.iconStyle}
                        />
                    </View>
                    </View>
                </TouchableOpacity>

                <InputField
                    placeholder={'john doe'}
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
                        label={"Phone"}
                        iconName={'old-mobile'}
                        iconType={'Entypo'}
                    />
                </View>
                <View style={styles.textFieldMargin}>
                    <InputField
                        placeholder={'Whatsapp'}
                        keyboardType={'number-pad'}
                        onChangeText={(e) => updateState({whatsapp : e, error: false })}
                        value={whatsapp}
                        label={"Whatsapp"}
                        iconName={'logo-whatsapp'}
                        iconType={'Ionicons'}
                    />
                </View>
                {error ?
                        <Text style={styles.errorText}>{`* ${errorMsg}`}</Text>
                        : null}
                <View style={styles.appButtonContainer}>
                    {saving ?
                    <ActivityIndicator
                    color={darkBlue}
                    size="small"
                    />:
                    <AppButton
                    onPress={updateProfile}
                     title={'Update Profile'}
                    />
                  }
                </View>
            </Content>
        </Container>
    )
}
export default EditProfile;