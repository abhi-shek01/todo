import { Navigate } from "react-router-dom"
import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService"

class AuthenticatedRoute extends Component
{
    render(){
        if(AuthenticationService.isUserLoggedIn())
        {
            console.log(this.props.children)
            return {...this.props.children}
        }
        else
        return <Navigate to="/login" />
    }
    
}

export default AuthenticatedRoute;