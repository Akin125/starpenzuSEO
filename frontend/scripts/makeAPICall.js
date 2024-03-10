#!/usr/bin/env node

const axios = require('axios');
const url = require('./urls')

const  BASE_URL = 'https://starpenzu-seo.netlify.app';

// Define the data to be sent in the request body
const data = {
    host: 'https://starpenzu-seo.netlify.app',
    key: '211e77d223d2491ab4801fcac72c0927',
    keyLocation: 'https://starpenzu-seo.netlify.app/211e77d223d2491ab4801fcac72c0927.txt',
    urlList: url
};


console.log(data)

// Define the URL of the API endpoint
const Uploadurl = 'https://api.indexnow.org/IndexNow';

// Send the POST request using axios
axios.post(Uploadurl, data, {
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Host': 'api.indexnow.org'
    }
})
    .then(response => {
        console.log('Response:', response.status);
    })
    .catch(error => {
        console.error('Error:', error);
    });
