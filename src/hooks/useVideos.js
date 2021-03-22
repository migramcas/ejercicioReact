import {useState,useEffect} from 'react';
import youtube from '../apis/youtube';


const useVideos = (defaultSearchTerm)=>{
    const [videos, setVideos] = useState([]);
    // setSelectedVideo(response.data.items[0]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async (term) => { //Funcion par abuscar videos
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items);
        // setSelectedVideo(response.data.items[0])
    };

    return [videos, search];
    
};


export default useVideos;