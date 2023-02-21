import { useState, useEffect } from 'react';
import Loader  from './components/UI/Loader.jsx'
import Navbar  from './components/Navbar.jsx'
import Hero  from './components/Hero.jsx'
import AboutServices  from './components/AboutServices.jsx'

function App() {

    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const hideAfterThisTime = setTimeout(() => {
        setVisible(false);
      }, 3000); 
  
      return () => {
        clearTimeout(hideAfterThisTime);
      };
    }, []);
  
    if (visible) {
      return <div><Loader /></div>;
    } else {
      return (
        <div className="App">
          
          <Navbar />
          <Hero />
          <AboutServices />
        </div>
      )
    }
  
  
}

export default App
