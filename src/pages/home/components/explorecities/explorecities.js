import React from 'react';
import {Link} from 'react-router-dom';
import './explorecities.css';

function ExploreCities(props) {
    return (
       <Link to="/explore/cities" className="explore_cities_link">
           <button className="explore_cities_button">Explore All Cities</button>
       </Link>
    )
}


export default ExploreCities;