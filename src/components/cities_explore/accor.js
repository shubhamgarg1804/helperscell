import React from 'react';
import './accor.css';
import { Link } from 'react-router-dom';



const Accor=({name})=>{
    return (
        <Link to={"/cities/"+name} className="accor">
            {name}
        </Link>
    )
}

export default Accor;