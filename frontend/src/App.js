import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Roteamento
import { Routes, Route } from 'react-router-dom';

// Components
import AboutUs from './pages/AboutUs';
import Frete from './pages/Frete';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={ <AboutUs/> } />
        <Route path="/frete" element={<Frete />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
