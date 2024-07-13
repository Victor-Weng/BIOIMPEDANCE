import React, { useContext } from 'react';
import { BioContext } from '../BioContext';
import Graph from './Graph.js';
import Overview from './Overview.js';
import Score from './Score.js';

const MainContent = () => {
    const { bio } = useContext(BioContext);

    return (
        <div className="main-content">
            <h1>Main Content</h1>
            <Overview />
            <Score />
            <Graph />
        </div>
    );
}

export default MainContent;
