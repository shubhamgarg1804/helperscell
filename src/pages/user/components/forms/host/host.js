import React, { Component } from 'react';
import './host.css';

class HostLogin extends Component {
    render() {
        return (
            <div className="uf_body_container">
                <div className="uf_body_wrapper">
                    <form action="" className="uf_form">
                        <input type="text"  className="uf_input" placeholder="username"/>
                        <input type="current-password" className="uf_input" placeholder="passwo*d"/>
                        <input type="button" value="Get me in" className="uf_submit_button"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HostLogin;