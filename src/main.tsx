import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import App from './App';
import Services from './routes/Services';
import About from './routes/About';
import Careers from './routes/Careers';
import Products from './routes/Products';
import ProductItem from './routes/ProductItem';
import PrivacyPolicy from './routes/PrivacyPolicy';
import CookieSettings from './routes/CookieSettings';
import PartnerContact from './routes/PartnerContact';
import ServiceItem from './routes/ServiceItem';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<App />} />
        <Route path="/Product/:id" element={<ProductItem />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Service/:id" element={<ServiceItem />} />
        <Route path="/Services" element={<Services />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/*
        <Route path="/Careers" element={<Careers />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookieSettings" element={<CookieSettings />} />
        <Route path="/PartnerContact" element={<PartnerContact />} />
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
