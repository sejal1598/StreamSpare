// const axios = require('axios');
// import axios from 'axios';

import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/video/details/',
  params: {
    id: 'kJQP7kiw5Fk',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': '94ec5da396msh5f083753df76381p1e65a5jsnddec7b752776',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
// import axios from 'axios';

// // const BASE_URL = "https://yt-api.p.rapidapi.com";
// const BASE_URL = "https://yt-api.p.rapidapi.com";
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '94ec5da396msh5f083753df76381p1e65a5jsnddec7b752776',
//     'x-rapidapi-host': 'yt-api.p.rapidapi.com'
//   }
// };

// export const fetchData = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
// import axios from 'axios';

// const BASE_URL = "https://yt-api.p.rapidapi.com";
// const options = {
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_YOU_TUBE_API_KEY,  
//    // Use environment variable for API key
//     'x-rapidapi-host': 'yt-api.p.rapidapi.com'
//   }
  
// };
// console.log("x-rapidapi-key");

// export const fetchData = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
