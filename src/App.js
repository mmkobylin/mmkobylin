import './scss/style.scss';

import Card from './components/Card';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Header from './components/Header';
import Job from './components/Job';
import Nav from './components/Nav';
import Project from './components/Project';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Scroll from './components/Scroll';
import Section from './components/Section';
import Subtitle from './components/Subtitle';
import Navhead from './components/Navhead';
// import Nav from './components/Nav';


const App = () => {

  return (

    <>
      <Nav/>
        <Header/>
        <Subtitle subtitle = 'About me' />
      <Job/>

      <Subtitle subtitle = 'Skills' />

      <div className='skills-format'>
      <Skill title = 'Languages'
        list = { ['JavaScript', 'PHP', 'CSS', 'HTML' ] }
      />
      <Skill title = 'Frameworks/Plugins'
        list = { [ 'Lavaravel', 'React/redux', 'Opencard', 'Woocommerce'] }
      />
      <Skill title = 'Tooling'
        list = { [  "Git & GULP", "npm", "VS Code", "Vagrant", "Balsamiq Cloud", "Storybook"]}
      />
      <Skill title = 'Server-side'
        list = { [ 'APIs', 'AWS', 'Blade Templates', 'Database Migration', 'MYSQL' ] }
      />
      </div>


      <ul>
        <li>Testing</li>
        <li>Setting up virtual machines</li>
        <li></li>#
      </ul>

      <Contact/>
      
    </>
  );
}

export default App;
