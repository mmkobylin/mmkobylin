import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skill from './components/Skill';
// import Header from './components/Header';

const App = () => {

  return (

    <>
      <Header/>
      <Nav/>
      <Contact/>
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
        list = { [ 'APIs', 'AWS', 'Blade Templates', 'Database Migration' 'MYSQL' ] }
      />

      <ul>
        <li>Testing</li>
        <li>Setting up virtual machines</li>
        <li></li>#
      </ul>

      
    </>
  );
}

export default App;
