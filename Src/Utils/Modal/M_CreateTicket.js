import React ,{Component} from 'react'
 import {requestHandler}from '../requestHandler'
 let GET = 'GET'
 let POST = 'POST'
 let dataType='multipart'
 export default class CreateTicketModal extends Component{

    static Priorities(URL){
        return requestHandler(GET,URL)
    }
    static Departments(URL){
        return requestHandler(GET,URL)
    }
    static CreateTicket(URL,data){
        return requestHandler(POST,URL,data)
    }
 }