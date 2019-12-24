import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './app.css';

//modules
import Header from '../components/headeruni/header';
import Home from '../pages/home/home';
import LoginPage from '../pages/user/user';
import ContactUs from '../pages/contact/contact';
import View from '../components/hotel_view/view';
import SearchPage from '../pages/search/search';
import HostLogin from '../pages/user/components/forms/host/host';
import UserLogin from '../pages/user/components/forms/user/user';
import UserSignup from '../pages/user/components/register/user/user';
import HostSignup from '../pages/user/components/register/host/host';
import ExploreCit from '../components/cities_explore/index';
import GalleryPage from '../pages/gallery/index';

class App extends Component {
    render() {
        return (
            <div className="app_outer_container">
               <div className="app_wrapper">
                    <Header/>
                       <Switch>
                           <Route path="/" exact component={Home}/>
                           <Route path="/home" exact component={Home}/>
                           <Route path="/search" exact component={SearchPage}/>
                           <Route path="/contact-us" exact component={ContactUs}/>
                           <Route path="/login" exact component={LoginPage}/>
                           <Route path="/hotel/:id" component={View}/>
                           <Route path="/host/signin" component={HostLogin}/>
                           <Route path="/user/signin" component={UserLogin}/>
                           <Route path="/user/signup" component={UserSignup}/>
                           <Route path="/host/signup" component={HostSignup}/>
                           <Route path="/explore/cities" component={ExploreCit}/>
                           <Route path="/gallery" component={GalleryPage}/>
                       </Switch>
               </div>
            </div>
        )
    }
}

export default App;