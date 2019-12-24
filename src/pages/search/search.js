import React, { Component } from 'react'
import './search.css';


export default class SearchPage extends Component {
    render() {
        return (
            <div className="sp_container">
                <div className="sp_wrapper">
                    <div className="sp_part">
                        <div className="sp_part_wrapper">

                            <div className="sp_part">
                               <input className="sp_search_input sp_input" placeholder="Search here"type="text"/>
                            </div>

                            <div className="sp_part">
                                <input className="sp_checks_input sp_input" placeholder="check-in-date" type="date"/>
                                <input className="sp_checks_input sp_input" placeholder="check-out-date" type="date"/>
                            </div>
                           
                           <div className="sp_part">
                                <select className="sp_p_input sp_input" placeholder="Adults" type="number">
                                         <option default disabled="true">Adults</option>
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                </select>
                                <select className="sp_p_input sp_input" placeholder="Children" type="number">
                                        <option default disabled="true">Children</option>
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                </select>
                                <select className="sp_p_input sp_input" placeholder="Rooms" type="number">
                                         <option default disabled="true">Rooms</option>
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                </select>
                           </div>

                           <div className="sp_part">
                               <button className="sp_search_button">Search</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
