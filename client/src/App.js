import {React, useContext} from 'react';
import Parameter from './components/Parameter';
import MainContent from './components/MainContent';
import { BioContext, BioProvider } from './BioContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { bio } = useContext(BioContext);
  
  return (
    <BioProvider>
    <Header />
    <div className="container">
      <div className="content">
        <div>
          <Parameter/>
        </div>
        {bio? (
          <div className="main">
          <MainContent/>
          </div>
        ):(
          <div className="main-image">
            <MainContent/>
            </div>
        )}
      </div>
      <Footer />
    </div>
    </BioProvider>
  );
}

export default App;
