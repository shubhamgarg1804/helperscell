import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './user.css';

class LoginPage extends Component {
    render() {
        return (
            <div className="login_page_outer_container">
               <div className="login_page_wrapper">
                   <h1 className="login_page_title">Hello, user</h1>
                   <div className="login_options_container">
                       <div className="login_option">
                           <Link to="/user/signin" className="login_option_link">
                               <button style={{"backgroundColor":"green"}} className="option_button">Signin as Visitor</button>
                            </Link>
                            <Link to="/host/signin" className="login_option_link">
                               <button style={{"backgroundColor":"#086aa3"}} className="option_button">Signin as Host</button>
                            </Link>
                       </div>
                       <h3 className="login_option_or">OR</h3>
                       <div className="login_option">
                           <Link to="/user/signup" className="login_option_link">
                               <button style={{"backgroundColor":"green"}} className="option_button">Signup as Visitor</button>
                            </Link>
                            <Link to="/host/signup" className="login_option_link">
                               <button style={{"backgroundColor":"#086aa3"}} className="option_button">Signup as Host</button>
                            </Link>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default LoginPage;
