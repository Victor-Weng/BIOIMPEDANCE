import React, { useContext } from 'react';
import { BioContext } from '../BioContext';
import Graph from './Graph';
import Overview from './Overview';
import Score from './Score';
import './MainContent.css'; // Import the CSS file

const MainContent = () => {
    const { bio } = useContext(BioContext);

    return (
        <div className="main-content">
            <h1 className="main-title">Main Content</h1>
            <div className="content-container">
                <Overview />
                <Score />
                <Graph />
            </div>
        </div>
    );
}

export default MainContent;
