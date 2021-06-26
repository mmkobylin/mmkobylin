import './scss/style.scss';

import Card from './components/Card';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Header from './components/Header';
import Job from './components/Job';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Projectcard from './components/ProjectCard';
import Skill from './components/Skill';
import Scroll from './components/Scroll';
import Section from './components/Section';
import Subtitle from './components/Subtitle';

const App = () => {

  return (

    <>
      <Section 
        message = "Hi, my name is Marta, backend developer by day and frontend by night :) My current work as a Tech Support Engineer focuses mostly on API's, MYSQL and testing."
        ></Section>
        <Subtitle subtitle = "Skills"/>
        <Section
          message = "Since I've graduated from DevelopMe_ Coding Bootcamp I have been freelancing and helping to build Bristol Tech Fair Webpage. My background is in the financial services."
        >        
        </Section>
      <Nav/>
        <Header/>
        <Subtitle subtitle = 'About' />
        <Section message = 'Hello'/>
        <Job/>

        <Section message = 'Hello'/>

        <Subtitle subtitle = 'Skills' />

        <div className='skills-format'>
        <Skill title = 'Languages'
          list = { ['JavaScript', 'PHP', 'CSS', 'HTML' ] }
        />
        <Skill title = 'Server-side'
          list = { [ 'APIs', 'AWS', 'Blade Templates', 'Database Migration', 'MYSQL' ] }
        />
    
        <Skill title = 'Frameworks/Plugins'
          list = { [ 'Lavaravel', 'React/redux', 'Opencart', 'Woocommerce'] }
        />
        <Skill title = 'Tooling'
          list = { [  "Git & GULP", "npm", "VS Code", "Vagrant", "Balsamiq Cloud", "Storybook"]}
        />

        </div>

      <Subtitle subtitle = 'Projects' />
      <Projects/>
      <Section message = 'Hello'/>

      <Subtitle subtitle = 'Contact' />

      <Contact/>
      
    </>
  );
}

export default App;
