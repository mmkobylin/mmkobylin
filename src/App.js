import './scss/style.scss';

import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Section from './components/Section';
import Subtitle from './components/Subtitle';
import { Fragment } from 'react';

const App = () => {

  return (

    // <Router>
      <Fragment> 
        <Nav/>
        <Header/>
        <Subtitle subtitle = 'About'/>
        <Section 
            message = "I am back end by day, front end by night. Currently I am working as an Tech Support Engineer, where I spend my time testing, finding bugs and providing information. In my free time I enjoy working with React and CSS."
        >
        </Section>
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
        <Section
            message = "Since I've graduated from DevelopMe Coding Bootcamp I have been freelancing and helping to build Bristol Tech Fair Webpage. My background is in the financial services."
        >
        </Section>
        <Subtitle subtitle = 'Projects' />
        <Projects/>
        <Section message = 'When I am not coding, I am reading, cooking or doing martial arts.'/>
        <Subtitle subtitle = 'Contact' />
        <Contact/>
      </Fragment>
    // </Router>
  );
}

export default App;
