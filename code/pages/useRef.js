import React, {useRef} from 'react';
import ImageToogleOnMouseOver from '../src/ImageToogleOnMouseOver'

const UseRef = ()=>{
    const imageRef = useRef(null);
    return (
        <>
            <p>
                <ImageToogleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg" secondaryImg="/static/speakers/Speaker-187.jpg" />
                <ImageToogleOnMouseOver primaryImg="/static/speakers/bw/Speaker-823.jpg" secondaryImg="/static/speakers/Speaker-823.jpg" />
            </p>
        </>
    )
}

export default UseRef;