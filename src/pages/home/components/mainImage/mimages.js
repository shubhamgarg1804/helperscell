import React from 'react';
import './mimage.css';


function MainImage() {
    return (
        <div className="main_image_outer_container">
            <div className="main_image_body">
                <img src={"https://images.oyoroomscdn.com/uploads/hotel_image/42030/xlarge/3273f03a218a04da.jpg"}/>
                <h2 className="main_image_heading">No place is strange</h2>
                <h3 className="main_image_sub_heading">Your compofort Matters the most</h3>
            </div>
        </div>
    )
}

export default MainImage;
