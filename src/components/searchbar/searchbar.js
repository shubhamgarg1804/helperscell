import React from 'react';
import {Link} from 'react-router-dom';
import './searchbar.css';

const SearchBar=()=>{
        return (
            <div className="search_bar_outer_container">
                <div className="search_bar_wrapper">
                    <Link to="/search" className="search_bar_input">click for search</Link>
                </div>
            </div>
        )
}

export default SearchBar;
