import React from 'react';
import './index.css';
import Accor from './accor';


class ExploreCit extends React.Component
{
    state={
        cities:[],
        few:false
    }
    
    componentDidMount()
    {
        fetch('https://rest-hotels-api.herokuapp.com/v1/cities')
        .then((data)=>data.json())
        .then((result)=>{ 
            this.setState({cities:[...result]});
            this.setState({few:true});
        }); 
    }

  render()
  {
      return(
          <div className="explore_cities_container">
              <div className="explore_cities_wrapper">
                  {
                      this.state.cities.map((city)=>{
                       return <Accor name={city.name}/>
                      })
                  }
                  {
                      this.state.cities.map((city)=>{
                       return <Accor name={city.name}/>
                      })
                  }
                  {
                      this.state.cities.map((city)=>{
                       return <Accor name={city.name}/>
                      })
                  }
                  {
                      this.state.cities.map((city)=>{
                       return <Accor name={city.name}/>
                      })
                  }
              </div>
          </div>
      )
  }
}

export default ExploreCit;