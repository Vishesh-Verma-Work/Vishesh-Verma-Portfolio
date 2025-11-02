import Header from './components/Header';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Academics from './components/Academics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SocialStrip from './components/SocialStrip';



import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <Achievements/>
      <Projects/>
      <Experience/>
      {/* <Testimonials/> */}
      <SocialStrip/>
      <Skills/>
      <Certificates/>
      <Academics/>
      <Contact/>
    </div>
  );
}

export default App;
