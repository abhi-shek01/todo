import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService";


class LoginComponent extends Component
{

    constructor(props){
        super(props);
        this.state ={
            userName : 'Abhishek',
            password : '123@example',
            hasLoginFailed : false,
            showSuccessMessage : false
        }
    }

    handleChange =(e) =>
    {
       this.setState({
        [e.target.name] : e.target.value})
    }

    handleLogin = () =>{
        if(this.state.userName==='Abhishek' && this.state.password==='123@example')
        {
        AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.password)
        this.props.navigate(`/welcome/${this.state.userName}`)
        this.setState({showSuccessMessage: true})
        this.setState({hasLoginFailed: false})
        }
        else
        {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})     
        }
        console.log("Clicked")
    }
    
    render(){
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
            <ShowInvalidCredentials hasLoginFailed ={this.state.hasLoginFailed} />
            <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage} />
            <h3>UserName: </h3> <input type="text"  name="userName"  value={this.state.userName} onChange={this.handleChange}  />
            <h3>Password: </h3> <input type="password"  name="password" value={this.state.password} onChange={this.handleChange} />
            <button onClick={this.handleLogin} className="btn btn-success">Login</button>
            </div>
        </div>
    )
}
}
function ShowInvalidCredentials (props) {
    if(props.hasLoginFailed)
    return <div className="alert alert-warning">Invalid Credentials</div>

    return null;
}

function ShowValidCredentials (props) {
    if(props.showSuccessMessage)
    return <div>Login Successful</div>

    return null;
}


export default LoginComponent