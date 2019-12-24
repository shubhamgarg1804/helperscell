import React,{Component} from 'react'
import './header.css';
import SearchBar from '../searchbar/searchbar';
import MenuIcon from './png/menu.png';
import BottomNav from '../navbaruni/unibar';
import { Link } from 'react-router-dom';

class Header extends Component{
    state={
        openMenu:false
    }

    CloseMenu=()=>this.setState({openMenu:false})
    onOpenk=()=>this.setState({openMenu:true})

    render(){
    return (
        <div className="header_outer_container">

            <div className="header_logo_section">
               <h2 className="header_logo_text">HelpersCell</h2>
               <img src={MenuIcon} onClick={this.onOpenk} className="header_menu_icon"/>
            </div>

            <div className="header_search_bar">
              <SearchBar/>
            </div>
            
            <BottomNav open={this.state.openMenu} onOpeni={this.onOpenk} onClose={this.CloseMenu}/>
        </div>
    )
    }
}

export default Header;
