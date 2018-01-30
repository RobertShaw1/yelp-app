'use strict';

import axios from 'axios';

axios.defaults.baseURL = 'https://api.yelp.com/v3/';
axios.defaults.headers.common['Authorization'] = process.env.FUSIONAPI_KEY;

export default {
  fetchBusinesses: async term => {
    try {
      const list = await axios.get(`businesses/search?location=Naperville&limit=50&term=${term}`);
      console.log(list.data)
      return list.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
}


/**
 * Query Strings:
 * Returns the first 50 businesses based on user search term
 *    --> https://api.yelp.com/v3/businesses/search?location=Naperville&limit=50&term=userinput
 * 
 * To get the next 50 businesses we need to add an offset parameter to the query
 *    --> https://api.yelp.com/v3/businesses/search?location=Naperville&limit=50&offset=51&term=userinput
 * 
 * 
 * 
 */
