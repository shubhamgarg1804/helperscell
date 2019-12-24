import React from 'react';
import './user.css';

function UserSignup() {
    return (
        <div className="us_container">
            <div className="us_wrapper">
               <form action="" className="us_form">
                   <label>Phone no.</label>
                   <input type="tel" className="us_input"/>
                   <input type="submit" className="us_submit_button"/>
               </form>
            </div>
        </div>
    )
}
export default UserSignup;