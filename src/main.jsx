import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
