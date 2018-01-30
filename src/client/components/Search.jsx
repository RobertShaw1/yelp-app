'use strict';

/** NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

/** LOCAL MODULES */
import api  from '../utils/api'

const styles = {
  buttonContainer: {
    display:  'flex',
    justifyContent: 'center',
  }
}

// Search Component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      businesses: {},
    }
  }

  handleChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({searchTerm})
  }

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    console.log(searchTerm)
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
          <div style={styles.buttonContainer}>
            <button className='search-button' onClick={this.handleSubmit} >Search</button>
          </div>
        <br/>
        <Link to={`/businessdetail/${'insert-business-name'}`}>
          <h3>Click Here if you'd like to see the Business Detail Component</h3>
        </Link>
      </div>
    )
  }
}
