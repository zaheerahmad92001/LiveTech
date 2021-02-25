import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { appBG, black, darkBlue } from "../../Constant/Colors";
import { Lato_Black, Lato_Bold, Lato_Regular } from "../../Constant/FontFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: appBG

    },
    container: {
        flex: 1,
        // marginTop:hp('1%'),
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // marginTop:25,
    },
    logoView: {
        // marginTop:hp('4.3%')
    },
    logo: {
        width: wp('100%'),
        // backgroundColor:'red',
        height: RFValue(200),
    },

    xlText: {
        fontSize: RFValue(25),
        fontFamily: Lato_Black,
        textAlign: 'center',
        fontWeight: 'bold',
        color: darkBlue
    },
    largeText: {
        fontSize: RFValue(14),
        fontFamily: Lato_Bold,
        textAlign: 'center',
        fontWeight: 'bold',
        color: black,
        marginTop: 3
    },
    mediunText: {
        color: black,
        fontSize: RFValue(14),
        fontFamily: Lato_Regular
    },
    loginView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        fontFamily: Lato_Black,
        fontSize: RFValue(14),
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: darkBlue,
        marginLeft: 5
    }
})