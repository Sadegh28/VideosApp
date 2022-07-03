import axios from 'axios';

const KEY = 'AIzaSyD--B5u6ndrJ9AHTVZ9YMnsdJtc4zizyrY';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }

});