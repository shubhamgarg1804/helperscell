import React from 'react';
import './footer.css';
//
import facebook from './png/facebook.png';
import instagram from './png/instagram.png';
import linkedin from './png/linkedin.png';
import twitter from './png/twitter.png';

function Footer(){
    return(
      <div className="footer_container">
          <div className="footer_wrapper">

           <div className="footer_section">
              <div class="card">
                <div class="text">
                    <i class="fas fa-envelope"></i>
                    <h3>Subscribe Now!</h3>
                    <p>Subscribe us for latest updates</p>
                </div>
               <form>
                   <input className="footer_news_email" id="useremail" type="email" placeholder="Your E-Mail" required/>
                   <input className="footer_news_submit" id="submit" type="submit" value="Submit"/>
               </form>
              </div>
            </div>

              <div className="footer_section">
                 <h2>Phone Support</h2>
                 <h4>24 hours available</h4>
                 <h3>+91-7351586148</h3>
              </div>

              <div className="footer_section">
                <h2>Follow Us</h2>
                <h4>Social Media Channels</h4>
                <ul className="social_media_channels_container">
                    <li><a href="https://www.facebook.com/helpercell_-102041027811128/" target="blank"><img src={facebook}/></a></li>
                    <li><a href="https://www.instagram.com/helperscell_/" target="blank"><img src={instagram}/></a></li>
                    <li><a href="" target="blank"><img src={linkedin}/></a></li>
                    <li><a href="" target="blank"><img src={twitter}/></a></li>
                </ul>
              </div>

          </div>
          <h3 className="footer_copyrights">
           © Copyright 2018 Mobirise - All Rights Reserved
         </h3>
      </div>
    )
}

export default Footer;
