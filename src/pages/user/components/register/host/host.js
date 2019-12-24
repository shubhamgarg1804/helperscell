import React, { Component } from 'react';
import '../../../../contact/contact.css';


class HostSignup extends Component {
    render() {
        return (                  
      <div className="contact_us_container">
        <h2 className="contact_us_title">Submit your hotel</h2>
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

          <label for="state">City</label>
          <select id="state" name="state">
            <option value="Punjab">hisar</option>
            <option value="Delhi">chandigarh</option>
            <option value="Rajasthan">bakery boy</option>
          </select>

          <label for="lname">Number of Rooms</label>
          <input className="contact_us_input" type="tel" id="lname" name="lastname" placeholder="Enter the number of rooms"/>


          <label for="lname">Upload Pics</label>
          <input className="contact_us_input" type="file" id="lname" name="lastname"/>

          <label for="lname">address</label>
          <input className="contact_us_input" type="text" id="lname" name="lastname"/>

          <label for="lname">Google location</label>
          <input className="contact_us_input" type="location" id="lname" name="lastname"/>


         <label for="subject">Subject</label>
         <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>

         <input className="contact_us_input" type="submit" value="Submit"/>
        </form>
      </div>
        )
    }
}

export default HostSignup;
