'use strict';

/** NODE MODULES */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

/** LOCAL MODULES */
import Yelp from '../../../public/assets/Yelp_trademark_RGB_outline.png'
import Search from './Search';
import BusinessDetail from './BusinessDetail';

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '3rem',
  },
  scrollStyle: {
    paddingBottom: '6.5rem',
  },
  footerStyle: {
    marginTop: 'auto',
    paddingBottom: '.5rem',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
  },
}

//Create App component
export default function App() {
  return (
    <Router>
        <div className='container' style={styles.containerStyle}>
          <div style={styles.scrollStyle}>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route path='/business-detail/:id' component={BusinessDetail} />
              <Route render={function() {
                  return <p>Not Found</p>
              }} />
            </Switch>
          </div>
          <footer style={styles.footerStyle}>
            <span className='powered'>Powered by</span>
            <img className='yelp-logo' src={Yelp} alt='Yelp' />
          </footer>
      </div>
    </Router>
  )
}
