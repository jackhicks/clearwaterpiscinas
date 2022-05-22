import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/global.css';
import App from './App';
import Services from './routes/Services';
import About from './routes/About';
import Careers from './routes/Careers';
import Products from './routes/Products';
import PrivacyPolicy from './routes/PrivacyPolicy';
import CookieSettings from './routes/CookieSettings';
import PartnerContact from './routes/PartnerContact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path="" element={<App />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />     
        <Route path="/Careers" element={<Careers />} />  
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />     
        <Route path="/CookieSettings" element={<CookieSettings />} />  
        <Route path="/PartnerContact" element={<PartnerContact />} />  
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />     
      </Routes>     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
