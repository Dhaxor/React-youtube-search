import React from 'react';

const Videolistitem = ({video}) => {
    
    console.log(video)

    const Imageurl = video.snippet.thumbnails.default.url;


    return (
       
        <li>
            <img src={Imageurl} />
            <span>{video.snippet.title}</span>

        </li>
    )
}

export default Videolistitem;