import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { appBG, black, darkBlue, grey } from "../../Constant/Colors";
import { Lato_Black, Lato_Bold, Lato_Regular, Roboto_Medium, Roboto_Regular } from "../../Constant/FontFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { normalText } from '../../Constant/TextSize';
export default StyleSheet.create({
    wraper: {
        flex: 1,
        backgroundColor: appBG

    },
    container: {
        flexGrow:1,
        marginHorizontal:10,
        marginTop:15,
    },
    
    ddStyle:{
        backgroundColor:'white',
        // elevation:1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height:0 },
        // shadowOpacity: 0.2,
        // shadowRadius: 5
    },
    placeholderStyle:{
    fontFamily:Roboto_Regular,
    fontSize:RFValue(normalText),
    color:black 
    },
    itemStyle:{
        justifyContent: 'flex-start',
    },
    labelStyle:{
        fontSize: RFValue(normalText),
        textAlign: 'left',   
        color:black,
        fontFamily:Roboto_Regular
    },
    dropDownStyle:{
        backgroundColor:'white',
        zIndex:500
    },
    containerStyle:{
        
        borderColor:grey,
        borderWidth:StyleSheet.hairlineWidth,
        marginTop:RFValue(10),
        marginBottom:5,
        borderRadius:5,
        backgroundColor:'white',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:RFValue(5)

    },
    selectedLabelStyle:{
        color:black
    },
    priorityView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:RFValue(10),
        justifyContent:'space-between'
    },
    attachFileView:{
        marginTop:RFValue(10),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
       
    },
    attachFileText:{
        flexDirection:"row",
        alignItems:"center",        
    },
    iconStyle:{
        fontSize:RFValue(20),
        color:darkBlue,
        marginLeft:5
    },
    buttonView:{
        marginBottom:50,
    }
    
})