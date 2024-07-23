import React from 'react';
import Parameter from './components/Parameter';
import MainContent from './components/MainContent';
import { BioContext, BioProvider } from './BioContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BioProvider>
    <Header />
    <div className="container">
      <div className="content">
        <div>
          <Parameter/>
        </div>
        <div className="main">
          <MainContent/>
        </div>
      </div>
      <Footer />
    </div>
    </BioProvider>
  );
}

export default App;
