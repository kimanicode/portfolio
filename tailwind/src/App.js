import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./pages/Form";

import {HashRouter} from 'react-router-dom'


function App() {
  return (
    <HashRouter>
      <div>
      <Navbar />
      <Hero /> 
      <About/>
      <Form/>
      <Contact/>
          
        
    
    
    
    
     
    </div>
    </HashRouter>
    
  );
}

export default App;
