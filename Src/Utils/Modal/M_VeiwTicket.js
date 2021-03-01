import React,{Component} from 'react'
 import {requestHandler}from '../requestHandler'
 let GET = 'GET'
 let POST = 'POST'
 let dataType='multipart'
 export default class ViewTicketModal extends Component{
    static tickets(URL){
        console.log('URL is ', URL)
        return requestHandler(GET,URL)
    }
 }