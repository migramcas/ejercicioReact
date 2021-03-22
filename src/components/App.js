import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('building'); //videos es el resultado de la busqueda, search es una funcion

    // useEffect(() => {
    //     onTermSubmit('buildings');
    // }, []);

    // const onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     })

    //     setVideos(response.data.items);
    //     // setSelectedVideo(response.data.items[0])
    // };

    useEffect(() =>{
        setSelectedVideo(videos[0]);
    },[videos])




    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}



export default App;