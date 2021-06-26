import React  from 'react'
import ProjectCard from './ProjectCard'
import Calculator from '../images/calculator.png'
import Packman from '../images/pacman.png'
import Pong from '../images/pong.png'
import Frankenstyle from '../images/frankenstyle.png'
import Minesweeper from '../images/minesweeper.png'
import Walton from '../images/walton.png'
import Sticky from '../images/sticky.png'


const Project = () => {
    return (
        <>
            <div className="project" >
                <ProjectCard 
                    title = { "Sticky-notes" }
                    image = { Sticky } 
                    description = { "Sticky notes react project, created using hooks." }
                />

                <ProjectCard 
                    title = { "Pong" }
                    image = { Pong } 
                    description = { "Tool that randomly creates pairings for a table tennis tournament from names provided by a user." }
                />
                <ProjectCard 
                    title = { "Frankenstyle" }
                    image = { Frankenstyle } 
                    description = { "Game where a person gets assigned a random word, and then in turn they have to draw it." }
                />
               
                <ProjectCard 
                    title = { "Minesweeper" }
                    image = { Minesweeper } 
                    description = { "Old fashion minesweeper game, created using JS logic and recursion." }
                />

                <ProjectCard 
                    title = { "Calculator" }
                    image = { Calculator } 
                    description = { "Basic calculator, done as a practical project to refresh vanilla JS and DOM." }
                />

                <ProjectCard 
                    title = { "Packman" }
                    image = { Packman } 
                    description = { "Old fashion Packman game, using JS logic" }
                />
                <ProjectCard 
                    title = { "Jeremy Walton Website" }
                    image = { Walton } 
                    description = { "Website for an abstract artist" }
                />
            </div>
        </>
    )
}

export default Project
