import React ,{Component} from 'react'
 import {requestHandler}from '../requestHandler'
 let GET = 'GET'
 let POST = 'POST'
 let dataType='multipart'
 export default class AuthModal extends Component{

     static Login(URL,data){
        return requestHandler(POST,URL,data)
    }

    static SignUp(URL,data){
        return requestHandler(POST,URL,data)
    }
    static UpdateProfile(URL,data){
        return requestHandler(POST , URL, data,dataType)
    }
    
 }