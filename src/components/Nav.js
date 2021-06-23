import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Nav = ( ) => {

    // scrolled - is the value changing
    //setScrolled is HOW it is going to change
    // 'false' is an initial state

    let [ scroll, setScroll ] = useState( false ); 
    useEffect(() => { 

        const handleScroll = () => {
            // checking if the item has been scrolled
            window.requestAnimationFrame(() => {
    
                if ( window.scrollY > 50 ) {
                    setScroll( scroll = true ) 
                }
                else {
                    setScroll( scroll = false )
                }
            });
        };

        // add scroll even listener that triggers the function
        window.addEventListener('scroll', handleScroll);

        // mount off function 
        return function cleanup () {
          window.removeEventListener('scroll', handleScroll);
        }

    }, [] )
    
    return (
        <>
            <nav className = { scroll ? "nav-scroll" : null } >

                <Link
                    to = "Skills"
                    smooth = { true } 
                    duration = { 1000 }
                    offset = { -100 }
                    className="links-nav skills-nav"
                >
                    Skills  
                </Link>
                <Link
                    to = "Projects"
                    smooth = { true } 
                    duration = { 1000 }
                    offset = { -150 }
                    className="links-nav"
                >
                    Projects  
                </Link>

                <Link
                    to = "Contact"
                    smooth = { true } 
                    duration = { 1000 }
                    className="links-nav"
                >
                    Contact  
                </Link>
               
            </nav>
        </>
    )
}


export default Nav
