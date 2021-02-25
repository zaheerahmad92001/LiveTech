import React, { useState } from 'react'
import { StyleSheet,Text } from 'react-native'
import { Header, Left, Right, Body, Title,Button,Icon } from 'native-base'
import { black } from '../Constant/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { Roboto_Medium } from '../Constant/FontFamily'
const AppHeader = (props) => {
    return (
        <Header
        style={{backgroundColor:'white'}}
        //  noShadow 
        //  transparent 
            >
            <Left style={styles.leftStyle} >
                <Button transparent
                onPress={props.leftPress}
                >
                    <Icon
                        name={props.leftIconName}
                        type={props.leftIconType}
                        style={styles.iconStyle} />
                </Button>
            </Left>
            <Body style={styles.bodyStyle}>
                <Text style={styles.title}>{props.body}</Text>
            </Body>
            <Right style={styles.righStyle}>
                <Button transparent
                onPress={props.rightPress}
                >
                <Icon
                    name={props.rightIconName}
                    type={props.rightIconType}
                    style={styles.iconStyle} />
                </Button>
            </Right>

        </Header>
    )
}
export default AppHeader;
const styles = StyleSheet.create({
    iconStyle:{
     fontSize:25,
     color:'black'
    },
    leftStyle:{
        // marginLeft:15,
        flex:0.2
    },
    bodyStyle:{
        flex:0.6
    },
    righStyle:{
        flex:0.2,
        // marginRight:15
    },
    title:{
        color:black,
        fontSize:RFValue(14),
        fontFamily:Roboto_Medium,
        fontStyle:'normal',
    }
})