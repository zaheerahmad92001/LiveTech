import { Container, Content, Drawer, Icon, Thumbnail } from 'native-base';
import React, { useRef, useReducer, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, Image,Platform } from 'react-native';
import AppHeader from '../../Component/Header';
import styles from './styles';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-material-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MediumHeading from '../../Component/MediumText';
import SmallText from '../../Component/SmallText';
import InputField from '../../Component/InputField';

import Doc from '../../Constant/FileIcons/Doc'
import Excel from '../../Constant/FileIcons/Excel';
import Jpg from '../../Constant/FileIcons/Jpg';
import MP from '../../Constant/FileIcons/Mp';
import Pdf from '../../Constant/FileIcons/Pdf';
import PowerPoint from '../../Constant/FileIcons/PowerPoint';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black, darkBlue, grey, mediumSky } from '../../Constant/Colors';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import { normalText } from '../../Constant/TextSize';
import { useSelector, useDispatch} from "react-redux";
import {BaseUrl}from '../../Constant/serverConfig';
import CreateTicketModal from '../../Utils/Modal/M_CreateTicket';
import AppButton from '../../Component/AppButton';
import DialogBox from 'react-native-dialogbox';
import { ActivityIndicator } from 'react-native';
let p =[]
let d =[]

function CreateTicket({ navigation }) {

    var inputRefs = useRef()
    let dialogboxRef = useRef()

    const user = useSelector(state => state.reducersHandler.userInfo);

    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            selected_dep: null,name:'',email:'', uid:'', priority:null,
            subject:'',message:'',filePath:'',fileType:'',PriorityList:'',
            DepartmentList:'',dep_id:'', p_id:'',saving:false
        }
    )
    const { 
        selected_dep,name,email,uid, priority,subject,message,
        fileType,filePath,PriorityList,DepartmentList,dep_id,p_id,
        saving,
       } = state

    useEffect(() => {
      updateState({
        name:user.user.name,
        email:user.user.email,
        uid : user.user.id
      })
     getPriorities()
     getDepartments()

    },[])

    goBack = () => {
        navigation.pop()
    }

    const getPriorities =() =>{
         let URL  = `${BaseUrl}priorities`
         CreateTicketModal.Priorities(URL).then((response)=>{
            if(response.success){
                let obj = [];
                response.data.forEach((res)=>{
                obj.push({...res,value:res.name ,label: res.name})
            })
               updateState({PriorityList:obj})
          }else{
               console.log('error in Priorities function',response)
          }

      }).catch((error)=>{
             console.log('error in Priorities function',error)
      })

    }

    const getDepartments =() =>{
         let URL = `${BaseUrl}departments`
         CreateTicketModal.Departments(URL).then((response)=>{
             if(response.success){
                 let obj =[]
                 response.data.forEach((res)=>{
                 obj.push({...res,value:res.name ,label: res.name})
             })
               updateState({DepartmentList:obj})
        }else{
               console.log('error in Departments function',response)
        }
      }).catch((err)=>{
              console.log('error in Departments function',err)
      })

    }



    const attachFile =async()=>{
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            updateState({
                filePath:res,
                fileType:res.type
            })
            console.log(
              res.uri,
              res.type, // mime type
              res.name,
              res.size
            );
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document picker cancel')
            } else {
              throw err;
            }
          }
    }
   
     const getfileicon = () => {
        let [img ,type] = fileType.split('/')
        let Component = Doc;
        if (type == 'pdf') {
          Component = Pdf;
        } else if (type == 'docx' || type == 'doc') {
          Component = Doc;
        } else if (type == 'jpg' || type == 'png' || type == 'jpeg') {
          Component = Jpg;
        } else if (
          type == 'xls' ||
          type == 'xlsb' ||
          type == 'xlsm' ||
          type == 'xlsx'
        ) {
          Component = Excel;
        } else if (
          type == 'mp3' ||
          type == 'Mp3' ||
          type == 'ogg' ||
          type == 'mp4'
        ) {
          Component = MP;
        } else if (type == 'pptx' || type == 'pptm' || type == 'ppt') {
          Component = PowerPoint;
        }
        return <Component height={40} width={40} />;
      };

     const showFile = async ()=> {
      await FileViewer.open(filePath.uri); 
     } 

const handlePress=()=>{
    let err = false
    let errorMsg =''
  //  console.log('dilogbox',dialogboxRef.current.alert())

   if(dep_id){
     if(p_id){
       if(subject.trim().length>0){
         if(message.trim().length >0){

          updateState({saving:true})
            err = false
            errorMsg = ''

            let data={
              "customer_id": uid,
              "dept_id":dep_id,
              "priority":p_id,
              "subject":subject,
              "ticket_detail":message
            }

            saveTicket(data)

         }else{
          errorMsg ='Type Your message',
          err = true
         }
       }else{
        errorMsg ='Subject is Missing',
        err= true
       }

     }else{
      errorMsg ='Please Select a Priority',
      err=true
     }
   }else{
   errorMsg ='Please Select a Department',
   err=true
   }
  
   if(err){
     dialogboxRef.current.tip({
       title:'Oops',
      content: [errorMsg],
      btn: {
          text: 'OK',
          callback: () => {
              errorMsg = '',
              err=false
          },
      },
     })
   }
  
}

const saveTicket =(data)=>{
  
  let URL =`${BaseUrl}create_ticket`
  CreateTicketModal.CreateTicket(URL,data).then((response)=>{
  if(response.success){
   updateState({
     saving:false,
     selected_dep:'',
     dep_id:'',
     priority:'',
     p_id:'',
     subject:'',
     message:'',
    })
   console.log('response',response)
  }else{
    console.log('Something went wrong SaveTicket funciton',response)
  }
  }).catch((error)=>{
    console.log('error in SaveTicket funciton',error)
  })

}
  
    return (
        <Container style={styles.wraper}>
            <AppHeader
                body="CREATE TICKET"
                leftIconName={'keyboard-backspace'}
                leftIconType={'MaterialIcons'}
                leftPress={() => { goBack() }}
            />
            <Content contentContainerStyle={styles.container}>
            <Dropdown
                label=''
                data={DepartmentList ? DepartmentList:d}
                onChangeText={(value,index,data) =>{ 
                  // console.log('data',data[index].id)
                  updateState({ selected_dep:value , dep_id:data[index].id })
              }}
                value={selected_dep ?selected_dep:'Select Department'}
                textColor={black}
                // baseColor={black}
                fontSize={normalText}
                itemColor={black}
                selectedItemColor={mediumSky}
                containerStyle={[styles.containerStyle,]}
                labelHeight={4}
                labelPadding={0}
                inputContainerStyle={{ borderBottomColor: 'transparent', }}
                useNativeDriver={true}
            />
                {/* <DropDownPicker
                    items={Departments}
                    placeholder="Select Department"
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.containerStyle}
                    arrowStyle={{ marginRight: 10, }}
                    arrowColor={grey}
                    arrowSize={25}
                    style={styles.ddStyle}
                    itemStyle={styles.itemStyle}
                    dropDownStyle={styles.dropDownStyle}
                    labelStyle={styles.labelStyle}
                    selectedLabelStyle={styles.selectedLabelStyle}
                    onChangeItem={(item, index) => updateState({ selected_dep: item.value })}
                    defaultValue={selected_dep}
                    zIndex={500}
                /> */}
                <SmallText
                    text="if you are reporting a problem , Please remember to provide as much information that is relevent to the issue as possible"
                    smallTextStyle={{ marginTop: 15, }}
                />

                <MediumHeading
                    text="General Information"
                    mediumTextStyle={{marginTop:10}}
                />
                <InputField
                    label={'Name'}
                    placeholder={'Your Name'}
                    keyboardType={'default'}
                    onChangeText={(value)=>updateState({name:value})}
                    value={name}
                    editable={false}
                />
                <InputField
                    label={'Email'}
                    placeholder={'Email'}
                    keyboardType={'default'}
                    onChangeText={(value)=>updateState({email:value})}
                    value={email}
                    editable={false}
                />

          <Dropdown
                label=''
                data={PriorityList?PriorityList:p}
                onChangeText={(value,index,data) => {
                  // console.log('daaaa',data[index].id)
                  updateState({ priority:value , p_id:data[index].id })
                }}
                value={priority ?priority:'Select Priority'}
                textColor={black}
                fontSize={normalText}
                // baseColor={black}
                itemColor={black}
                selectedItemColor={mediumSky}
                containerStyle={[styles.containerStyle,]}
                labelHeight={4}
                labelPadding={0}
                inputContainerStyle={{ borderBottomColor: 'transparent', }}
                useNativeDriver={true}
            />
                 {/* <DropDownPicker
                    items={Priority}
                    placeholder="Select Priority"
                    placeholderStyle={styles.placeholderStyle}
                    containerStyle={styles.containerStyle}
                    arrowStyle={{ marginRight: 10, }}
                    arrowSize={25}
                    arrowColor={grey}
                    style={{...styles.ddStyle}}
                    itemStyle={styles.itemStyle}
                    dropDownStyle={styles.dropDownStyle}
                    labelStyle={styles.labelStyle}
                    selectedLabelStyle={styles.selectedLabelStyle}
                    onChangeItem={(item, index) => updateState({ priority: item.value })}
                    defaultValue={priority}
                    zIndex={1}
                /> */}

                <InputField
                    label={'Subject'}
                    placeholder={'Subject'}
                    keyboardType={'default'}
                    onChangeText={(value)=>updateState({subject:value})}
                    value={subject}
                />

               <InputField
                    label={'Message'}
                    placeholder={'Type your message'}
                    keyboardType={'default'}
                    onChangeText={(value)=>updateState({message:value})}
                    value={message}
                    multiline={true}
                    inputViewStyle={{paddingVertical:Platform.OS==='ios'? 12:2,}}
               />

               <View style={styles.attachFileView}>
               <TouchableOpacity
                onPress={attachFile}
               >
                   <View style={styles.attachFileText}>
                   <MediumHeading text={'Attach file'}/>
                   <Icon
                     name={'attachment'}
                     type={'Entypo'}
                     style={styles.iconStyle}
                   />
                   </View>
               </TouchableOpacity>
               {fileType ?
                <TouchableOpacity
                onPress={showFile}
                >
                {getfileicon()}
                </TouchableOpacity>
               :
              <Image
                source={require('../../Constant/images/file.png')}
                style={{width:40,height:40}}
              />
              }

               </View>
        <View style={styles.buttonView}>
          {saving ?
          <ActivityIndicator
          color={darkBlue}
          size={'small'}
          />:
           <AppButton
             title={'Send'}
             onPress={handlePress}
           />}
        </View>
       
      </Content>
        <DialogBox ref={dialogboxRef}/>
        </Container>
    )
}
export default CreateTicket;