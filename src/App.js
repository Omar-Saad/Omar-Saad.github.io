import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  // scroll to about section
  const scrollToAbout = () => {
    console.log('scrolling to about');
    console.log(document.getElementById('about'));
    document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  }
  // useEffect(() => {
  //   scrollToAbout();
  // }, []);
  // scrollToAbout();
  
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Home/>
      </main>
      <About id="about"/>

      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <footer>
        <Footer/>
      </footer>
          </div>
  );
}

export default App;
