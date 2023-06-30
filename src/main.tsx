import React from 'react';
import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App';
import Services from './routes/Services';
import About from './routes/About';
import RentalGuide from './routes/RentalGuide';
import Careers from './routes/Careers';
import Products from './routes/Products';
import ProductItem from './routes/ProductItem';
import PrivacyPolicy from './routes/PrivacyPolicy';
import CookieSettings from './routes/CookieSettings';
import PartnerContact from './routes/PartnerContact';
import ServiceItem from './routes/ServiceItem';
import PageNotFound from './routes/PageNotFound';
import PaymentsPage from './routes/PaymentsPage';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/RentalGuide" element={<RentalGuide />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Payments/:token3" element={<PaymentsPage />} />
        <Route path="/Payments" element={<PaymentsPage />} />
        <Route path="/Product/:id" element={<ProductItem />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Service/:id" element={<ServiceItem />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookieSettings" element={<CookieSettings />} />
        <Route path="*" element={<PageNotFound />} />
        {/*
        <Route path="/Careers" element={<Careers />} />
        <Route path="/PartnerContact" element={<PartnerContact />} />
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
