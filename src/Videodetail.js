import React from 'react';

const Videodetail = ({video}) =>{

        if(!video){
            return(<div>Loading......</div>)
        }


    const videoId = video.id.videoId;

    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="container-box">

            <div className="iframe-box">
                <iframe src={url}></iframe>
            </div>

                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
        </div>

    )
}

export default Videodetail;