import React, { Component } from 'react';
import Swiper from 'swiper';

//rater
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
//css
import 'swiper/dist/css/swiper.min.css';
import './review.css';


class Review extends Component {
componentDidMount(){
    const swiper = new Swiper('.review_container', {
        slidesPerView:1,
        scrollbar:true
      });
}

render(){
       return(<div className="review_body_outer_container">
           <h1 className="review_heading">See what cutomers say about Helperscell</h1>
              <div className="review_container swiper-container">
                  <div className="review_wrapper swiper-wrapper">
                    
                      <div className="swiper-slide review_body">
                          <img src={"https://cdn.pixabay.com/photo/2016/05/17/10/04/boy-1397818_960_720.jpg"} className="review_image"/>
                          <h2 className="review_rating">{<Rater total={5} rating={4.6}/>}</h2>
                          <h2 className="review_name">Sandhu</h2>
                          <div className="review_text">
                          Very well located, Yes Hotel is a little gem a 5-minute walk from Termini station. The rooms have A/C and are clean. The hotel is modern and the service friendly. The breakfast buffet has a very nice variety. Despite its small size, this hotel delivers big on all fronts. Will definitely try to stay here next time we're in Rome!
                      </div>
                      </div>
                      
                       <div className="swiper-slide review_body">
                          <img src={"https://cdn.pixabay.com/photo/2016/05/17/10/04/boy-1397818_960_720.jpg"} className="review_image"/>
                          <h2 className="review_rating">{<Rater total={5} rating={4.6}/>}</h2>
                          <h2 className="review_name">Sandhu</h2>
                          <div className="review_text">
                          Great hotel in a perfect location. Round the corner from the termini. Spotlessly clean great breakfast and staff couldn’t do enough. Real value for money.
                       </div>
                       </div>

                       
                      <div className="swiper-slide review_body">
                          <img src={"https://cdn.pixabay.com/photo/2016/05/17/10/04/boy-1397818_960_720.jpg"} className="review_image"/>
                          <h2 className="review_rating">{<Rater total={5} rating={4.6}/>}</h2>
                          <h2 className="review_name">Sandhu</h2>
                          <div className="review_text">
                          Love this hotel, great staff service, very friendly and helpful ! Great location and very close from the train station! Will be back in a near future!
                       </div>
                       </div>

            
                  </div>
              </div>
          </div>
       )
   }
}


export default Review;


