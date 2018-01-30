'use strict';

/** NODE MODULES */
import React from 'react';
import { Link } from 'react-router-dom';

/** LOCAL MODULES */


// BusinessDetail Component
export default function BusinessDetail() {
  return (
    <div>
      <h1>You've reached the Business Detail Component!</h1>
      <br/>
      <Link to='/'>
        <h3>Click Here if you'd like to go back to the Search Component</h3>
      </Link>
    </div>
  )
}
