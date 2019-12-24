import React, { Component } from 'react';
import './home.css';

//modules
import MainImage from './components/mainImage/mimages';
import CitySlider from './components/cityslider/cityslider';
import CardSlider from '../../components/hotelcardslider/cardslider';
import ExploreCities from './components/explorecities/explorecities';
import Review from './components/review/review';
import ABHome from './components/about/abouthome';
import Footer from './components/footer/footer';


class Home extends Component {
    render() {
        return (
            <div className="home_outer_container">
              <div className="home_wrapper">
                  <MainImage/>
                  <CitySlider/>
                  <ExploreCities/>
                  <CardSlider title="Recomended for you"/>
                  <CardSlider title="Visited"/>
                  <Review/>
                  <ABHome/>
                  <Footer/>
              </div>
            </div>
        )
    }
}

export default Home;
