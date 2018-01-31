'use strict';

/** NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

/** LOCAL MODULES */
import api  from '../utils/api';

const styles = {
  buttonContainer: {
    display:  'flex',
    justifyContent: 'center',
  },
};

// Search Component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      businesses: [],
    };
  }

  handleChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({searchTerm});
  }

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    api.fetchBusinesses(searchTerm)
    .then(data => {
      console.log('data = ', data)
      const { businesses } = data;
      this.setState({businesses});
    })
  }

  render() {
    const { businesses } = this.state;

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
          <div style={styles.buttonContainer}>
            <button className='search-button' onClick={this.handleSubmit} >Search</button>
          </div>
        <br/>
        {
          businesses.length
          ? businesses.map(business => {
              return (
                <Link key={business.id} to={`/business-detail/${business.id}`}>
                  <h3>{business.name}</h3>
                </Link>
              )
            })
          : <Link to={`/businessdetail/${'insert-business-name'}`}>
              <h3>Click Here if you'd like to see the Business Detail Component</h3>
            </Link>
        }
      </div>
    )
  }
}
