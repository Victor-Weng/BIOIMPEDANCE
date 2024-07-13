import React from 'react';
import Parameter from './components/Parameter';
import MainContent from './components/MainContent';
import { BioProvider } from './BioContext';
import './App.css';

const App = () => {
    return (
        <BioProvider>
            <div className="app">
                <Parameter />
                <MainContent />
            </div>
        </BioProvider>
    );
}

export default App;
