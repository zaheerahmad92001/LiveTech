import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from './Splash'
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import EditProfile from './EditProfile';
import GetHelp from './GetHelp';
import CreateTicket from './CreateTicket';
import ViewTicket from './ViewTickets';

const Stack = createStackNavigator();


function SplashNavigator() {
return(
    <Stack.Navigator initialRouteName={"Splash"} headerMode={'none'}>
        <Stack.Screen name={'Splash'} component={Splash}/>
    </Stack.Navigator>
)}

function AuthNavigator(){
    return(
        <Stack.Navigator initialRouteName={'Login'} headerMode={'none'}>
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
        </Stack.Navigator>
    )}

function HomeNavigator() {
    return(
        <Stack.Navigator initialRouteName={'Home'} headerMode={'none'}>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'EditProfile'} component ={EditProfile}/>
            <Stack.Screen name={'GetHelp'} component ={GetHelp}/>
            <Stack.Screen name={'CreateTicket'} component={CreateTicket} />
            <Stack.Screen name={"ViewTicket"} component ={ViewTicket}/>
        </Stack.Navigator>
    )}
    

function AppContainer (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" headerMode={'none'}>
                <Stack.Screen name={'SplashScreen'} component={SplashNavigator}/>
                <Stack.Screen name={"Auth"} component={AuthNavigator} />
                <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            </Stack.Navigator>
           
        </NavigationContainer>
    )
}
export default AppContainer