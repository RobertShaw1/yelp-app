'use strict'

const unirest = require('unirest');

module.exports = {
  fetchBusinesses: searchTerm => {
    return new Promise((resolve, reject) => {
      unirest.get(`https://api.yelp.com/v3/businesses/search?location=Naperville&limit=50&term=${searchTerm}`)
        .header('Authorization', process.env.FUSIONAPI_KEY)
        .header('Accept', 'application/json')
        .end(response => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            const error = new Error('Failed to get data from api');
            reject(error);
          }
        });
    });
  },
  fetchBusinessDetail: businessId => {
    return new Promise((resolve, reject) => {
      unirest.get(`https://api.yelp.com/v3/businesses/${businessId}`)
        .header('Authorization', process.env.FUSIONAPI_KEY)
        .header('Accept', 'application/json')
        .end(response => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            const error = new Error('Failed to get data from api');
            reject(error);
          }
        });
    });
  },
}

/**
 * Query Strings:
 * Returns the first 50 businesses based on user search term
 *    --> https://api.yelp.com/v3/businesses/search?location=Naperville&limit=50&term=userinput
 * 
 * To get the next 50 businesses we need to add an offset parameter to the query
 *    --> https://api.yelp.com/v3/businesses/search?location=Naperville&limit=50&offset=51&term=userinput
 * 
 */
