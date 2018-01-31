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

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '3rem',
}

//Create App component
export default function App() {
  return (
    <Router>
      <div className='container' style={containerStyle}>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/business-detail/:id' component={BusinessDetail} />
          <Route render={function() {
              return <p>Not Found</p>
          }} />
        </Switch>
      </div>
    </Router>
  )
}
