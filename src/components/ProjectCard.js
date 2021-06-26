import React from 'react'
import Packman from '../images/pacman.png'

const Projectcard = ( { title, description, link, code, image } ) => {
    return (
        <>
            <div class="project-card">
                <div class="project-card-inner">
                    {/*  front */}
                    <div class="project-card-front">
                        <h3> { title } </h3> 
                        <img className="card-image" src={ image } alt="Gold"/>
                    </div>
                    {/* back */}
                    <div class="project-card-back">
                        <h3> { title } </h3> 
                        <p className="description"> { description } </p>
                        <div className="links">
                            <a href = { link } >Link</a>
                            <a href = { code } >Code</a>
                        </div>
                    </div>
                </div>
            </div> 
        </>       
    )
}
export default Projectcard

Projectcard.defaultProps = {
    title: "I am no longer your calculator",
    description: "Basic calculator, done as a practical project to refresh vanilla JavaScript and DOM.",
    link: "ahref",
    code: "codelink",
    image: Packman
}
