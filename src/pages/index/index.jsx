import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './normalize.css';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Footer from '../../Components/Footer/Footer';
import About from '../../pages/about/About';
import { Services } from '../services/Services';
import { Schedule } from '../portfolio/Schedule';
import { Portfolio } from '../portfolio/Portfolio';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/tp-final-2-react-utn">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
