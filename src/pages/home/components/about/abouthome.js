import React, { Component } from 'react';
import './abouthome.css';


class ABHome extends Component{
    render(){
        return (
            <div className="about_home_container">
              <div className="about_home_wrapper">
                 <h1 className="about_home_title">About HelpersCell</h1>
                 <img className="about_home_image" src={"https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/07/1hotelsouthbeach.png"}/>
                 <p className="about_home_text">
                 Helper's Cell is digital platform for hasselfree PG Experience in Kota. We are team of young people who are enthusiast. We are providing PG to new students and proffessional on affordable rent. Vibrant community, hassle free stay, and simple budget friendly spaces.
                 </p>
              </div>
            </div>
        )
    }
}


export default ABHome;