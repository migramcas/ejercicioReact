import axios from 'axios';

const key = 'AIzaSyA-2bvxUWa73LKAUFdAUaM9W7VHP6ohUeI'


export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 5,
            key: key
        }
    }
);
