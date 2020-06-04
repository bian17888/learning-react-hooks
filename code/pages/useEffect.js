import React from 'react';

import ImageToogleOnScroll from '../src/ImageToogleOnScroll';

const  UseEffect = ()=>{
    return(
        <>
            {[1124,187,823,1269,1530].map(speakerId => {
                return (
                    <p key={speakerId}>
                        <ImageToogleOnScroll primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`} secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}/>
                    </p>
                );
            })}
        </>
    )
}

export default UseEffect;