import './scss/style.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
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
import { Fragment } from 'react';

const App = () => {

  return (

    <Router>
      <Fragment> 
        <Nav/>
        <Header/>
        <Subtitle subtitle = 'About'/>
        <Section 
            message = "I am backend by day, front end by night. Currently working as an Tech Support Engineer where I spend time testing, finding bugs and providing information from database. At home I like nothing better than dive in react and css."
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
            message = " ."
        >
        </Section>
        <Subtitle subtitle = 'Projects' />
        <Projects/>
        <Section message = 'Hello'/>
        <Subtitle subtitle = 'Contact' />
        <Contact/>
      </Fragment>
    </Router>
  );
}

export default App;
