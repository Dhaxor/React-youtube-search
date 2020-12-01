import React from 'react';
import Videolistitem from './Video_list_item';



const Videolist = (props) => {

    const Videolistitems = props.videos.map((video)=>{
        return (
        <Videolistitem

         onVideoSelect={props.onVideoSelect}
         key={video.etag}
         video={video} />
         )
    });

    return (
        <ul className="videolist">
            {Videolistitems}
        </ul>
    )
}

export default Videolist;