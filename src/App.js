import About from './componen/About';
import Home from './componen/Home';
import NavBar from './componen/NavBar';
import Skill from './componen/Skill';
import ProJect from './componen/ProJect'
import Contanct from './componen/Contanct'
import Footer from './componen/Footer'

function App() {
  return (
       <div>
       <NavBar />
       <Home />
       <About />
      <ProJect />
    <Skill />
    <Contanct />
    <Footer />
       </div>
  );
}

export default App;
