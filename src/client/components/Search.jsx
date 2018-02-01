'use strict';

/** NODE MODULES */
import React, { Component } from 'react';

/** LOCAL MODULES */
import api  from '../utils/api';
import BusinessCards from './BusinessCards';
import Loading from '../../../public/assets/searching.gif'

const styles = {
  header: {
    textAlign: 'center',
    color: 'black',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
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
      loading: false,
    };
  }

  handleChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({searchTerm});
  }

  handleSubmit = (e) => {
    this.setState({loading: true})

    const { searchTerm } = this.state;
    api.fetchBusinesses(searchTerm)
    .then(data => {
      const { businesses } = data;
      this.setState({businesses, loading: false});
    })
  }

  render() {
    const { businesses, loading } = this.state;

    return (
      <div style={styles.searchContainer}>
        <h1 style={styles.header}>Naperville Business Directory</h1>
        <br/>
          <div style={styles.buttonContainer}>
            <input
              className='search-bar'
              type='search'
              placeholder='Search...'
              onChange={this.handleChange}
            />
            <button
              className='search-button'
              onClick={this.handleSubmit} 
            >
              <i className='fas fa-search fa-lg' />
            </button>
          </div>
        <br/>
        {
          loading
          ? <img className='loading' src={Loading} alt='Loading...' />
          : businesses.length
          ? <BusinessCards businesses={businesses} />
          : null
        }
      </div>
    )
  }
}
