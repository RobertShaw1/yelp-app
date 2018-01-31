'use strict';

/** NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/** LOCAL MODULES */
import api  from '../utils/api';

// BusinessDetail Component
export default class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    api.fetchBusinessDetail(id)
    .then(data => this.setState({data}));
  }

  render() {
    const { data } = this.state;
    const dataPresent = Object.keys(data).length;

    if(!dataPresent) return <h1>Loading. . .</h1>
    else return (
      <div>
        <h1>You've reached the Business Detail Component!</h1>
        <hr/>
        <h3>{data.name}</h3>
        <p>{data.display_phone}</p>
        <p>{data.location.display_address.join(' ')}</p>
        <Link to='/'>
          <h3>Click Here if you'd like to go back to the Search Component</h3>
        </Link>
      </div>
    )
  }
}
