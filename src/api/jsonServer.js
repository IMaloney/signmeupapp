// purely for testing
// url changes every 8 hours for ngrok server 

import axios from 'axios';

export default axios.create({
    baseURL: ''
});