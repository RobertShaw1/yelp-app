'use strict';

/** NODE MODULES */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

/** LOCAL MODULES */
import Search from './Search';
import BusinessDetail from './BusinessDetail';
import Yelp from '../../../public/assets/Yelp_trademark_RGB_outline.png';

//Create App component
export default function App() {
  return (
    <Router>
        <div className='main-container'>
          <div className='scroll-container'>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route path='/business-detail/:id' component={BusinessDetail} />
              <Route render={function() {
                  return <p>Not Found</p>
              }} />
            </Switch>
          </div>
          <footer>
            <span className='powered'>Powered by</span>
            <a href="http://www.yelp.com" target='_blank'>
              <img className='yelp-logo' src={Yelp} alt='Yelp' />
            </a>
          </footer>
      </div>
    </Router>
  )
}
