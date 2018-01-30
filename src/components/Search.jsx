'use strict';

/** NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

/** LOCAL MODULES */


// Search Component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  handleChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({searchTerm})
  }


  render() {
    return (
      <div>
        <h1>You've reached the Search Component!</h1>
        <br/>
          <Input
            size='large'
            icon='search'
            placeholder='Search...'
            fluid
            onChange={this.handleChange}
          />
        <br/>
        <Link to={`/businessdetail/${'insert-business-name'}`}>
          <h3>Click Here if you'd like to see the Business Detail Component</h3>
        </Link>
      </div>
    )
  }
}
