'use strict';

/** NODE MODULES */
import React from 'react';
import { Link } from 'react-router-dom';

/** LOCAL MODULES */

// Search Component
export default function Search() {
  return (
    <div>
      <h1>You've reached the Search Component!</h1>
      <br/> 
      <Link to={`/businessdetail/${'insert-business-name'}`}>
        <h3>Click Here if you'd like to see the Business Detail Component</h3>
      </Link>
    </div>
  )
}
