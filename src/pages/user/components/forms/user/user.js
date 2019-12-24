import React, { Component } from 'react';
import './user.css';

class UserLogin extends Component {
    render() {
        return (
            <div className="hf_body_container">
                <div className="hf_body_wrapper">
                    <form action="" className="hf_form">
                        <input type="text"  className="hf_input" placeholder="username"/>
                        <input type="current-password" className="hf_input" placeholder="passwo*d"/>
                        <input type="button" value="Get me in" className="hf_submit_button"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserLogin;