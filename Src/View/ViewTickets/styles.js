import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { appBG, black, darkBlue, grey,shadowColor } from "../../Constant/Colors";
import { Lato_Black, Lato_Bold, Lato_Regular, Roboto_Medium, Roboto_Regular } from "../../Constant/FontFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { normalText } from '../../Constant/TextSize';

export default StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: appBG

    },
    container: {
        flex:1,
        marginHorizontal:10,
        paddingTop:10,
        zIndex:-1
    },
    searchView:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingLeft:0,
        paddingRight:0,

        shadowColor:shadowColor,
        shadowOpacity:0.2,
        shadowOffset:{height:2,width:0},
        shadowRadius:RFValue(2),
        elevation:1,
        position:'absolute',
        top:0,right:0,left:0,
        // zIndex:1
        
    },
    searchInput:{
        flex:1,
        paddingVertical:13,
        paddingHorizontal:10,
        color:grey,
        fontFamily:Roboto_Regular,
        fontSize:RFValue(normalText)
    },
    iconStyle:{
        color:grey,
        fontSize:RFValue(20),
        paddingRight:10,
        fontFamily:Roboto_Regular,
    },
    flatlist:{
        paddingBottom:RFValue(20),
        paddingTop:RFValue(15)
},


})