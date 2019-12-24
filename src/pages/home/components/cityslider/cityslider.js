import React, { Component } from 'react';
import Swiper from 'swiper';
import {Link} from 'react-router-dom';
//css
import 'swiper/dist/css/swiper.min.css';
import './cityslider.css';

import NearbyIcon from './nearby.svg';

class CitySlider extends Component {

    state={
        cities:[]
    }

    componentDidMount()
    {
       /* const swiper = new Swiper('.city_slider_body_container', {
            slidesPerView:"auto",
            scrollbar:true,
            pagination: {
              el: '.city_slider_pagination',
              type: 'progressbar',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });*/

      fetch('https://rest-hotels-api.herokuapp.com/v1/cities')
      .then((data)=>data.json())
      .then((result)=>{
          this.setState({cities:[...result]});
          this.setState({few:true});
      }) 
    }
    render() {
        return (
            <div className="city_slider_outer_container">
                <div className="city_slider_wrapper">
                    <div className="swiper-container city_slider_body_container">
                        <div className="swiper-wrapper city_slider_body_wrapper">
                            <div className="swiper-slide city_slider_slide">
                                <Link to="/search"><img src={NearbyIcon}/></Link>
                                 <h3>Nearby</h3>
                             </div>
                             {
                              this.state.cities.map((city)=>{
                                return <div className="swiper-slide city_slider_slide">
                                     <img src={city.image}/>
                                     <h3>{city.name}</h3>
                                 </div>
                              }) 
                             }
                             {
                              this.state.cities.map((city)=>{
                                return <div className="swiper-slide city_slider_slide">
                                     <img src={city.image}/>
                                     <h3>{city.name}</h3>
                                 </div>
                              }) 
                             }
                        </div>
                        <div className=".city_slider_pagination"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CitySlider;