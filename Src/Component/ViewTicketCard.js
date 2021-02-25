import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { darkBlue, mediumSky, lightSky } from '../Constant/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import MediumHeading from './MediumText';
import SmallText from './SmallText';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';


const ViewTicketCard = (props) => {
    return (
        <LinearGradient colors={['white', 'white',]} style={styles.linearGradient}>
            <View style={styles.header}>
                <MediumHeading
                    mediumTextStyle={styles.mediumTextStyle}
                    text={'Ticket ID :'} />
                <MediumHeading
                    mediumTextStyle={{ ...styles.mediumTextStyle, marginLeft: 10 }}
                    text={'109'} />
            </View>
            <Card style={styles.cardStyle}>
                <View style={styles.cardContent}>
                    <MediumHeading
                        text={'Title : '}
                        mediumTextStyle={styles.heading}
                    />
                    <SmallText
                        text={'Suject'}
                        smallTextStyle={styles.smallTextStyle}
                    />
                </View>
                <View style={styles.cardContent}>
                    <MediumHeading
                        text={'Created at : '}
                        mediumTextStyle={styles.heading}
                    />
                    <SmallText
                        text={'2021-02-10'}
                        smallTextStyle={styles.smallTextStyle}
                    />
                </View>
                <View style={styles.cardContent}>
                    <MediumHeading
                        text={'Last reply at : '}
                        mediumTextStyle={styles.heading}
                    />
                    <SmallText
                        text={'2021-02-12'}
                        smallTextStyle={styles.smallTextStyle}
                    />
                </View>
                <View style={styles.cardContent}>
                    <MediumHeading
                        text={'Reply by : '}
                        mediumTextStyle={styles.heading}
                    />
                    <SmallText
                        text={'Zaheer'}
                        smallTextStyle={styles.smallTextStyle}
                    />
                </View>
                <View style={styles.cardContent}>
                    <MediumHeading
                        text={'Assigned : '}
                        mediumTextStyle={styles.heading}
                    />
                    <SmallText
                        text={'Install Window , and repair my System'}
                        smallTextStyle={styles.smallTextStyle}
                    />
                </View>

                <View style={styles.replyView}>
                    <TouchableOpacity>
                        <View style={styles.innerView}>
                            <Icon
                                name={'reply'}
                                type={'Octicons'}
                                style={styles.iconStyle}
                            />
                            <SmallText
                                text={'Reply'}
                                smallTextStyle={{ color: darkBlue }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

            </Card>
        </LinearGradient>
    )
}
export default ViewTicketCard;

const styles = StyleSheet.create({
    cardStyle: {
        paddingTop: 0,
        marginTop: 0,
        borderWidth: 0,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

    },
    linearGradient: {
        marginBottom:10,
    },
    header: {
        backgroundColor: mediumSky,
        marginHorizontal: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mediumTextStyle: {
        color: 'white',
        fontSize: RFValue(16)
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallTextStyle: {
        flex: 1,
        marginLeft: 10,
    },
    heading: {
        alignSelf: 'flex-start'
    },
    replyView: {
        flexDirection: 'row',
        //   alignItems:'center',
        alignSelf: 'flex-end',
        marginTop: RFValue(5),
        marginRight: 5,
    },
    innerView:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle:{
        fontSize:RFValue(20), 
        marginRight: RFValue(10),
         color: darkBlue,
    },
})