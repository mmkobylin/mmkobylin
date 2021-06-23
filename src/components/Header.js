import React, { useState, useEffect } from 'react'

const Intro = () => {

    let [animation, setAnimation] = useState(false); 

    let [scroll, setScroll] = useState( false );

    let handleAnimation = () => { setAnimation(animation = !animation) }

    // array started for className
    var classArray = ["intro"] 

    useEffect(() => { 
        const handleScroll = () => {
        
            window.requestAnimationFrame(() => {
    
                if ( window.scrollY > 50 ) {
                    setScroll( scroll = true ) 
                }
                else {
                    setScroll(scroll = false )
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
     
        return function cleanup () {
          window.removeEventListener('scroll', handleScroll);
        }
    }, [] )

    // adding neon if animation is true 
    if ( animation ) {
        classArray.push("neon") 
    }

    if ( scroll ) {
        classArray.push("scrolled") 
    }

    return (
        <div className="intro-background">
            <div
            // separating classArray using 'join' function
            className = { classArray.join(' ') } 
            onClick = { handleAnimation }
            >
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="title">
                    <h1>Marta Kobylinska</h1>
                    <h1>Full Stack Developer</h1>
                    <br></br>
                    { animation ?
                    <p>Click to stop </p> : <p>Click to illuminate</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Intro
