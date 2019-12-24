import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import './unibar.css';

//icons
import HomeIcon from './icons/home.png';
import BookingIcon from './icons/booking.png';
import ContactIcon from './icons/contact.png';
import LoginIcon from './icons/login.png';
import SearchUIcon from './icons/search.png';

function BottomNav(props){
    return (<SwipeableDrawer
        anchor="right"
        open={props.open}
        onClose={props.onClose}
        onOpen={props.onOpeni}
       >
        <div className="bottom_nav_container">
           <div className="bottom_nav_wrapper">

               <ul className="bottom_nav_list_container">

                  <li onClick={props.onClose} className="bottom_nav_list">
                      <Link to="/home" className="bottom_nav_list_link">
                           <img className="bottom_nav_list_link_icon" src={HomeIcon}/>
                           <h5 className="bottom_nav_list_link_title">Home</h5>
                      </Link>
                  </li>

                  <li onClick={props.onClose} className="bottom_nav_list">
                      <Link to="search" className="bottom_nav_list_link">
                           <img className="bottom_nav_list_link_icon" src={SearchUIcon}/>
                           <h5 className="bottom_nav_list_link_title">Nearby</h5>
                      </Link>
                  </li>

               
                  <li onClick={props.onClose}  className="bottom_nav_list">
                      <Link to="contact-us" className="bottom_nav_list_link">
                           <img className="bottom_nav_list_link_icon" src={ContactIcon}/>
                           <h5 className="bottom_nav_list_link_title">Contact-us</h5>
                      </Link>
                  </li>

                  <li onClick={props.onClose} className="bottom_nav_list">
                      <Link to="gallery" className="bottom_nav_list_link">
                           <img className="bottom_nav_list_link_icon" src={LoginIcon}/>
                           <h5 className="bottom_nav_list_link_title">Gallery</h5>
                      </Link>
                  </li>

                  <li onClick={props.onClose} className="bottom_nav_list">
                      <Link to="login" className="bottom_nav_list_link">
                           <img className="bottom_nav_list_link_icon" src={LoginIcon}/>
                           <h5 className="bottom_nav_list_link_title">You</h5>
                      </Link>
                  </li>


               </ul>
           </div>
        </div>
        </SwipeableDrawer>
    )
}

export default BottomNav;