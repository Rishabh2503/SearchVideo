import axios from 'axios'

const KEY = 'AIzaSyBN5JkNKtu65tRuefWX6oMcHpu8RbjMhfE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
        
    }
});
