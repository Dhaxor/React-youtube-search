import React from 'react';

const Videolistitem = ({video,onVideoSelect}) => {
    
    // console.log(video)

    const Imageurl = video.snippet.thumbnails.default.url;


    return (
       
        <li onClick={ () => onVideoSelect(video) }>
            <img src={Imageurl}  alt="this is what i want" />
            <span>{video.snippet.title}</span>

        </li>
    )
}

export default Videolistitem;