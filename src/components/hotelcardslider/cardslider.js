import React, { Component } from 'react'
import Swiper from 'swiper';
//css
import 'swiper/dist/css/swiper.min.css';
import './cardslider.css';
import HotelCard from '../hotelcard/hotelcard';


class CardSlider extends Component {
    state={
        data:[],
        few:false
    }
    componentDidMount()
    {
    const swiper = new Swiper('.card_slider_body_container', {
   
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        });

    fetch('https://rest-hotels-api.herokuapp.com/v1/hotels')
      .then((data)=>data.json())
      .then((result)=>{
          this.setState({data:[...result]});
          this.setState({few:true});
      }) 
     }

    render() {
        return (
            <div className="card_slider_outer_container">
                <h1 className="card_slider_title">{this.props.title}</h1>
               <div className="swiper-container card_slider_body_container">
                        <div className="swiper-wrapper card_slider_body_wrapper">
                             {
                            this.state.data.map((res)=>{
                             return   <div key={res.id} className="swiper-slide card_slider_slide">
                                         <HotelCard data={res}/>
                                      </div>
                              }) 
                             }
                        </div>
                        <div className=".card_slider_pagination"></div>
                    </div>
            </div>
        )
    }
}

export default CardSlider;