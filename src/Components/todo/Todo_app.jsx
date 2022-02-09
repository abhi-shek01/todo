import React,{Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation  from "./WithNavigation";
import withParams from './WithParams'
import '../../bootstrap.css'
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodo from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";

class TodoApp extends Component
{
    render()  {
const LoginComponentWithNavigation = withNavigation(LoginComponent);
const WelcomeComponentWithParams = withParams(WelcomeComponent);
const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
return (
<div>
<Router>      
<HeaderComponentWithNavigation />
    <Routes>
    <Route path="/" element={<LoginComponentWithNavigation />} />
    <Route path="/login" element={<LoginComponentWithNavigation />} />
    <Route path="/welcome/:name"
     element={  <AuthenticatedRoute>
    <WelcomeComponentWithParams /> 
    </AuthenticatedRoute> }/>
    <Route path="/todo" element={ <AuthenticatedRoute> <ListTodo /></AuthenticatedRoute>} />
    <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
    <Route path="*" element={<ErrorComponent />} />
     </Routes>
     <FooterComponent />
</Router>
</div>
)   
    }
}

 export default TodoApp;