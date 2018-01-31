'use strict';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export default {
  fetchBusinesses: async searchTerm => {
    try {
      const list = await axios.get(`/search?term=${searchTerm}`);
      return list.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },
  fetchBusinessDetail: async businessId => {
    try {
      const businessDetail = await axios.get(`business-detail/${businessId}`);
      return businessDetail.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },
};
