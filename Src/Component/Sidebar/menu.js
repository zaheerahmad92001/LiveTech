import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    SafeAreaView,
    SectionList,
    Platform
} from 'react-native';
import { Button, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { black, blue, grey, lightSky, mediumSky } from '../../Constant/Colors';
// import AsyncStorage from "@react-native-community/async-storage"
import { StackActions } from '@react-navigation/native';
import { Lato_Bold, Lato_Black, Roboto_Medium } from '../../Constant/FontFamily'
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { connect } from 'react-redux';
import { DATA } from '../../Constant/SideMenu_ConstantValue'
import { mediumText, normalText } from '../../Constant/TextSize';
import AsyncStorage from '@react-native-community/async-storage';
import { login_user } from '../../Constant/StorageKey';
import { imgbaseUrl } from '../../Constant/serverConfig';
import { isIphoneX } from 'react-native-iphone-x-helper'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: '',
            selectedTitle: '',
            name:'',
            email:'',
        }
        this.vRef = React.createRef()
    }
    componentDidMount(){
      let userInfo =   this.props.user.user
      this.setState({
          name:userInfo.name,
          email:userInfo.email,
          profile_pic:userInfo.profile_pic
      })
    
    }
    _onPress = async (name, index) => {
        this.setState({
            selectedTitle: name.title,
            selectedIndex: index,
        })
        if (name.nav === 'Auth') {
            await AsyncStorage.removeItem(login_user)
            this.props.navigation.dispatch(StackActions.replace('Auth'));
        }


        // this.props.navigation.pop()
        // this.props.navigation.navigate({ routeName: name })
        // this.props.drawerClose();
    }
    
    ListHeaderComponent = () => {
        const {name,profile_pic,email} = this.state
        return (
            <TouchableWithoutFeedback style={
                isIphoneX() ?
                [styles.Hcomponent,{paddingTop:30}]:
                [styles.Hcomponent]
            }
            onPress={
               ()=> {
                this.props.navigation.navigate('HomeNavigator',{screen:'EditProfile'}),
                setTimeout(()=>{
                    this.props.drawerClose()
                },1000)
                
            }
          }>     
              <View style={styles.imgView}>
                { profile_pic ?
                <Image
                    // resizeMode={"contain"}
                    style={{width:null , height:null ,flex:1}}
                    source={{uri:imgbaseUrl+profile_pic}}
                />:
                <Image
                    resizeMode={"contain"}
                    style={{width:null , height:null ,flex:1}}
                    source={require('../../Constant/images/loginuser.jpg')}
                />
                }
            </View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={[styles.emailText]}>{email}</Text>
            </TouchableWithoutFeedback>
        )
    }
    renderSectionHeader = (section) => {
        return (
            <View>
                {section.title === '' ? null :
                    <View>
                        <View style={styles.horizontalLine}></View>
                        <Text style={styles.header}>{section.title}</Text>
                    </View>
                }
            </View>
        )
    }


    renderITem = (item, index) => {
        const { selectedIndex, selectedTitle } = this.state
        return (
            <TouchableOpacity
                onPress={() => this._onPress(item, index)}
            >
                <View style={
                    selectedIndex === index && selectedTitle === item.title ?
                        [styles.item, { backgroundColor: lightSky }] :
                        [styles.item]
                }>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        style={
                            selectedIndex === index && selectedTitle === item.title ?
                                [styles.iconStyle, { color: mediumSky }] :
                                [styles.iconStyle]
                        }
                    />
                    <Text style={
                        selectedIndex === index && selectedTitle === item.title ?
                            [styles.title, { color: mediumSky }] :
                            [styles.title]
                    }>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        // console.log('redux data', this.props.user.user.name)
        return (
            <View style={
                [styles.sidebar]
                }>
                
                <SectionList
                    nestedScrollEnabled={true}
                    sections={DATA}
                    stickySectionHeadersEnabled={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => this.renderITem(item, index)}
                    SectionSeparatorComponent={() => (<View style={styles.sectionSeperator} />)}
                    renderSectionHeader={({ section }) => this.renderSectionHeader(section)}
                    ListHeaderComponent={this.ListHeaderComponent}
                    ListHeaderComponentStyle={{backgroundColor:mediumSky}}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        // marginTop: RFValue(8),
        backgroundColor: 'white',
    },
    nameText:{
   color:'white',
   fontFamily:Roboto_Medium,
   fontSize:RFValue(normalText),
   marginTop:RFValue(10),
   fontSize:RFValue(20)
    },
    emailText:{
        color:'white',
        fontFamily:Roboto_Medium,
        fontSize:RFValue(normalText),
         marginTop:RFValue(5),
        fontSize:RFValue(normalText)
         },
    item: {
        // backgroundColor: "#f9c2ff",
        paddingVertical: Platform.OS === 'android' ? 5 : 5,
        paddingHorizontal: 10,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 7,
    },
    header: {
        fontSize: RFValue(16),
        marginLeft: RFValue(20),
        color: grey,
        fontFamily: Roboto_Medium,
        // backgroundColor: "grey"
    },
    title: {
        fontSize: RFValue(16),
        color: black,
        fontFamily: Roboto_Medium,
        marginLeft: 20

    },
    sectionSeperator: {
        paddingVertical: 5,
    },
    itemSperetor: {
        height: 4,
        width: '100%',

    },
    horizontalLine: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#D3D3D3',
        marginBottom: RFValue(15),
    },
    iconStyle: {
        width: RFValue(30),
        height: RFValue(30),
        color: grey,
    },
    imgView:{
        width:RFValue(60),
        height:RFValue(60),
        borderRadius:RFValue(60/2),
        backgroundColor:'black',
        // alignSelf:'center',
        // marginTop:RFValue(20),
        overflow:"hidden"
    },
    Hcomponent:{
        marginTop: 20,
        marginLeft:20,
        paddingBottom:10,
    }
})
const mapStateToProps = state => ({
    user: state.reducersHandler.userInfo,

});
export default connect(mapStateToProps)(Sidebar);