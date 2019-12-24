import React from 'react';
import Rater from 'react-rater';
import {Link} from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import './hotelcard.css';

function HotelCard(props) {
    return (
        <div className="hotel_card_outer_container">
            <div className="hotel_card_outer_wrapper">
                <img className="hotel_card_image" src={props.data.images[0]}/>
                <h2 className="hotel_card_ratings">{<Rater total={5} interactive={false} rating={props.data.stars}/>}</h2>
                <Link className="hotel_card_link" to={{ 
                 pathname: `/hotel/${props.data._id}`, 
               }}><h2 className="hotel_card_title">{props.data.name||0}</h2></Link>
                <h3 className="hotel_card_price">$ {props.data.price}</h3>
                <h4 className="hotel_card_address">{props.data.address}</h4>
            </div>
        </div>
    )
}


export default HotelCard;