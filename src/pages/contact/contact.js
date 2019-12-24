import React, { Component } from 'react';
import './contact.css';


class ContactUs extends Component {
    render() {
        return (                  
      <div className="contact_us_container">
        <h2 className="contact_us_title">Contact Us</h2>
         <form>
          <label for="fname">Name</label>
          <input className="contact_us_input" type="text" id="fname" name="firstname" placeholder="Your name.."/>

          <label for="lname">Phone No.</label>
          <input className="contact_us_input" type="tel" id="lname" name="lastname" placeholder="Your phone no."/>

          <label for="state">State</label>
          <select id="state" name="state">
            <option value="Punjab">Punjab</option>
            <option value="Delhi">Delhi</option>
            <option value="Rajasthan">Rajasthan</option>
          </select>

         <label for="subject">Subject</label>
         <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>

         <input className="contact_us_input" type="submit" value="Submit"/>
        </form>
      </div>
        )
    }
}

export default ContactUs;
