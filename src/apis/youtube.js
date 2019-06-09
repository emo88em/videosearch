import axios from 'axios';


const KEY = 'AIzaSyAo3rGje6FnLr8uvv0CRonBtH0oQ7OYY_o';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { 
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});
