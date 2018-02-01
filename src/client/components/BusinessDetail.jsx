'use strict';

/** NODE MODULES */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/** LOCAL MODULES */
import api  from '../utils/api';
import Loading from '../../../public/assets/loading-red.gif';
import Yelp from '../../../public/assets/Yelp_trademark_RGB_outline.png';

const styles = {
  detailContainer: {
    width: '100%',
  },
  articleOne: {
    height: '30%',
    marginTop: '3rem',
    display: 'inline-flex',
  },
  sectionOne: {
    height: '100%',
    width: '30rem',
    marginRight: '2rem',
  },
  img: {
    height: '100%',
  },
  back: {
    color: 'black',
    margin: '5rem 0 0 0',
  },
}

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

    if(!dataPresent) return <img className='loading' src={Loading} alt='Loading...' />
    else return (
      <div style={styles.detailContainer}>
        <article style={styles.articleOne}>
          <section style={styles.sectionOne}>
            <img src={data.image_url} alt={data.name} style={styles.img} />
          </section>
          <section>
            <h3>{data.name}</h3>
            <a href={data.url} target='_blank'>
              <p style={{margin: '3rem 0 0 0'}}>Read More on</p>
              <img className='yelp-logo' src={Yelp} alt='Yelp' />
            </a>

          </section>
        </article>
        <hr/>
        <p>
          <i className='fas fa-phone' />
          {data.display_phone}
        </p>
        <p>
          <i className='fas fa-map-marker-alt' />
          {
            data.location.display_address
            ? <a
                href={
                  `http://www.google.com/maps/search/${
                    data.location.display_address
                    .join(' ')
                    .replace(/\s+/g, '+')
                  }`
                }
                target='_blank'
              >
                {data.location.display_address.join(' ')}
              </a>
            : 'Unknown location'
          }
        </p>
        <Link to='/' style={styles.back} >
          <h3>
            <i className="fas fa-arrow-left" />
            Back to Search
          </h3>
        </Link>
      </div>
    )
  }
}
