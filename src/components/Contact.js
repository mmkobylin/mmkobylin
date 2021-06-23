import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contact = () => {

    return (
        <div className = "contact-section">
            <IconContext.Provider value={ { size: "6rem" } } >

            <div className = "contact-div">

                <a href="https://github.com/mmkobylin/">
                    <FaGithubSquare className="icon"/>
                </a>

                <a href="mailto:" className="mail">mmkobylin@gmail.com</a>

                <a href="https://www.linkedin.com/in/marta-kobylinska-8902861b7/">
                    <FaLinkedin className="icon"/>
                </a>
            </div>
            </IconContext.Provider>
        </div>
       );  
    }


export default Contact