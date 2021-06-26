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
