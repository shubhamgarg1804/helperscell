import React, { Component } from 'react';
import Rater from 'react-rater';
import {history} from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import './view.css';


import BackArrow from './png/left.png';
import WifiIcon from './png/wifi.png';
import AcIcon from './png/ac.png';
import cctvIcon from './png/cctv.png';
import gymIcon from './png/gym.png';
import tvIcon from './png/tv.png';
import bedIcon from './png/bed.png';
import kitchenIcon from './png/kitchen.png';
import Guide from './png/hunter.png';
import Gallery from '../gallery/gallery';

class View extends Component {
    state={
        Info:{},
        Amenities:
        {
            wifi:true
        },
        images:[],
        model:false
    }

    componentDidMount(){
        fetch(`https://rest-hotels-api.herokuapp.com/v1/hotels/${this.props.match.params.id}`)
      .then((data)=>data.json())
      .then((result)=>{
          this.setState({Info:result,images:result.images});
      }) 
     }
 
     CloseGallery=()=>{
         this.setState({model:false});
     }

     openModel=()=>{
        this.setState({model:true});
     }

    render(){
        return (
            <div className="hotel_view_outer_container">
                <div className="hotel_view_outer_wrapper">
                    <div className="hotel_view_header"><img src={BackArrow} alt="" className="hotel_view_back_icon"/></div>
                    <div className="hotel_view_front_image_container"><img onClick={this.openModel} src={this.state.images[0]}/></div>
                    
                    <h2 className="hotel_view_hotel_title">{this.state.Info.name}</h2>
                    <h3 className="hotel_veiw_hotel_add">{this.state.Info.address}</h3>
                    <h4 className="hotel_veiw_hotel_rev">{<Rater total={5} interactive={false} rating={this.state.Info.stars}/>} (120 reviews)</h4>
                    <div className="hotel_view_amenities_container">
                        <h2 className="hotel_view_amenities_title">Amenities</h2>

                        <div className="hotel_view_amenities_wrapper">
                            <div className="hotel_view_amenities_inner_wrapper">
                              <img src={WifiIcon}/>
                              <img src={AcIcon}/>
                              <img src={cctvIcon}/>
                              <img src={gymIcon}/>
                              <img src={kitchenIcon}/>
                              <img src={tvIcon}/>
                              <img src={bedIcon}/>
                            </div>
                      </div>
                    </div>

                    <div className="h_v_local_guide">
                        <h2 className="h_v_local_guide_title">HelpersCell's Local guide</h2>
                        <div className="h_v_local_guide_box"><img src={Guide}/><p>call our local guide for ant type of support and query</p></div>
                    </div>

                    <button className="h_v_google_location_buttoon">See location on Google</button>
                </div>
                <Gallery open={this.state.model} close={this.CloseGallery} images={this.state.images}/>
            </div>
        )
    }
};

export default View;