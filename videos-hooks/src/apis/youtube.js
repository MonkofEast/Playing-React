import axios from 'axios';

const KEY = 'AIzaSyDm-KSCuO3f9ME0aOrUSkXl0pCTQC--AcI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});
