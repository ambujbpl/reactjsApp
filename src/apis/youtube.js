import axios from 'axios';
const KEY = 'AIzaSyDO6vBoKwUyeQQT1G0UT4Jqap2jNuFZAsE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  }
});