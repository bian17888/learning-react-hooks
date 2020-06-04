import React, {useRef, useState, useEffect} from 'react';

const ImageToogleOnScroll = ({primaryImg, secondaryImg})=>{
    
    const [inView, setInView] = useState(false);
    
    const imageRef = useRef(null);
    
    useEffect(()=>{
        window.addEventListener('scroll', scrollHander);
        return (()=>{
            window.removeEventListener('scroll', scrollHander);
        })
    });

    return (
        <img 
            ref={imageRef}  
            src={inView ? secondaryImg :primaryImg } 
            alt="" />
    )

    //////////////////////////////////////////////////
    
    function scrollHander(){
        const isInView = imageRef.current.getBoundingClientRect()   .bottom <= window.innerHeight;
        setInView(isInView);
    }

}

export default ImageToogleOnScroll;