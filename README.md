# yelp-app

A super simple business directory that leverages [Yelp's FUSION API](https://www.yelp.com/developers/documentation/v3/get_started)

### This is a Fullstack JavaScript application
Server | Client
------------ | -------------
[Node.js](https://nodejs.org/en/) | [React](https://github.com/facebook/react/)
[Express.js](http://expressjs.com/) | [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
[unirest](https://www.npmjs.com/package/unirest) | [axios](https://github.com/faceyspacey/redux-first-router)

### Setup
** *Note: A Yelp API key is needed to run this app locally.  [Create a Yelp account](https://www.yelp.com/signup) and secure a [FUSION API key](https://www.yelp.com/developers/v3/manage_app).*

If you have Node installed then you should be able to:
1. fork/clone this repo
2. Install all dependencies with your preferred package manager
    *  We recommend using [yarn](https://yarnpkg.com/en/)
3. Create a `secrets.js` file and add the following: 
    *  `process.env.FUSIONAPI_KEY = 'Bearer [Insert API Key w/o brackets]'`
4. Then run the script `yarn start-dev`
