import { Icon } from "native-base";
import React, { useRef } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { appBG, black, darkBlue } from "../Constant/Colors";
import { Lato_Bold, Roboto_Medium, Roboto_Regular } from "../Constant/FontFamily";
import { normalText } from "../Constant/TextSize";
// import { Icon } from 'react-native-elements'


const InputField = (props) => {
    let textInput = useRef()
    let text = useRef()
    let vRef = useRef()
   

    focusedInput = () => {
        if (props.onFocus) {
            props.onFocus();
        }
        vRef.setNativeProps({
            style: { borderColor: darkBlue, borderWidth: 1 },
        });
        text.setNativeProps({
            style: { color: darkBlue },
        });
       
    };

    blurredInput = () => {
        vRef.setNativeProps({
            style: { borderColor: 'gray', borderWidth: StyleSheet.hairlineWidth },
        });
        text.setNativeProps({
            style: { color: 'gray' },
        });
    };

    return (
        // this zindex is used for dropdonw picker
        <View> 
            <View style={{ flexDirection: 'row', }}>
                <Text
                    ref={(c) => { text = c }}
                    style={[styles.label]}
                >
                    {props.label}
                </Text>
            </View>
            <View
                ref={(a) => { vRef = a }}
                style={[styles.InputView,props.inputViewStyle]}
            >
                <Icon
              ref={(c) => { icn = c }}
             name={props.iconName}
             type={props.iconType}
             style={styles.iconStyle}
             onPress={props.iconPress}
             />
                

                <TextInput
                    ref={(c) => { textInput = c }}
                    secureTextEntry={props.secureTextEntry}
                    editable={props.editable}
                    onFocus={focusedInput}
                    onBlur={blurredInput}
                    keyboardType={props.keyboardType}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    multiline={props.multiline}
                    numberOfLines={props.numberOfLines}
                    style={[styles.Input]}
                />
            </View>
        </View>
    )
}
export default InputField;
const styles = StyleSheet.create({
    InputView: {
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        fontSize: 12,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'ios' ? 12 :2,
        zIndex: -10, 
        backgroundColor:'white'

    },
    Input: {
        backgroundColor: 'white',
        // backgroundColor:appBG,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: black,
        fontSize: RFValue(normalText),
        fontFamily: Roboto_Regular,
        flex: 1,

    },
    label: {
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'black',
        fontSize: RFValue(14),
        // backgroundColor: 'white',
        backgroundColor:appBG,
        top: 8
    },
    iconStyle: {
        fontSize: RFValue(23),
        color: darkBlue
    }

})