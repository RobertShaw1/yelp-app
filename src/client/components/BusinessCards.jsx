'use strict';

/** NODE MODULES */
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  resultsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gemContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  gemColor: {
    color: 'red',
    paddingTop: '1.4rem',
    paddingRight: '.5rem',
  },
  categoryContainer: {
    // margin: '.7rem 0 0 0',
    margin: '0',
    paddingTop: '.8rem',
    fontSize: '.8rem',
  },
  titleContainer: {
    display: 'inline-flex',
    height: 'fit-content',
  },
  locationContainer: {
    fontSize: '.9rem',
    color: 'slategray',
  },
};

function BusinessCards(props) {
  const { businesses } = props;

  return (
    <div style={styles.resultsContainer}>
      <div style={styles.gemContainer}>
        <i className="fas fa-gem" style={styles.gemColor} /> = Highly Rated
      </div>
      <br/>
      {
        businesses.map(business => (
            <article key={business.id} className='articleContainer'>
              <section style={styles.titleContainer}>
                {
                  business.rating >= 4.5
                  ? <i className="fas fa-gem" style={styles.gemColor} />
                  : null
                }
                <Link to={`/business-detail/${business.id}`}>
                  <h4>{business.name}</h4>
                </Link>
              </section>
              <p style={styles.categoryContainer}>
                {
                  business.categories
                  .map(category => category.title)
                  .join(' | ')
                }
              </p>
              <p style={styles.locationContainer}>
                <i className="fas fa-map-marker-alt" />
                {
                  business.location.address1
                  ? <a
                      href={
                        `http://www.google.com/maps/search/${
                          business.location.display_address
                          .join(' ')
                          .replace(/\s+/g, '+')
                        }`
                      }
                      target='_blank'
                    >
                      {business.location.address1}
                    </a>
                  : 'Unknown location'
                }
              </p>
            </article>
          )
        )
      }
    </div>
  )
}

export default BusinessCards;
