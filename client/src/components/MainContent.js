import { Fragment, useContext } from 'react';
import { BioContext, BioProvider } from '../BioContext';
import { Skeleton, Divider } from '@nextui-org/react';
import Graph from './Graph';
import Overview from './Overview';
import Score from './Score';
import './MainContent.css'; // Import the CSS file

const MainContent = () => {
    const { bio } = useContext(BioContext);

    const getConditionMessage = (condition) => {
        if (!bio || !condition) {
            return <span className="healthy">is...</span>;
        }

        switch (condition) {
            case 'Normal':
                return <span className="healthy"> is healthy.</span>;
            case 'Atopic Dermatitis':
                return <span className="atopic-dermatitis"> has atopic dermatitis.</span>;
            case 'Melanoma':
                // Add logic to differentiate between benign and malignant later
                return <span className="malignant-melanoma"> has malignant melanoma.</span>;
            default:
                return <span className="healthy"> is healthy.</span>;
        }
    };

    return (
        <Fragment>

            <div className={bio ? "main-content" : "main-content-fade"}>
                <div className="parent">
                    {bio ? (
                        <div className="child left-margin">
                            <h1 className="main-title main-title-color">Your skin</h1>
                            <span className="condition-message inline-text">
                                {getConditionMessage(bio.condition)}
                            </span>
                        </div>
                    ) : (
                        <div>
                        <h1 className="main-title">Get started.</h1>
                        <p className="left-align">This website is based on mathematical models to generate electrical impedance
                            spectroscopy data for atopic dermatitis and melanoma. With different depth settings,
                            test locations, and frequencies, the data can be indicative of the condition of the skin. 
                            This project is part of a long-term research initiative to develop a non-invasive method
                            for skin disease detection and is still in development.

                            <br/><br/>
                            To get started, select a depth and mesh size, then click calculate. 
                            Frequency is left at 2.5Mhz, test location is left undefined, and conditions are being actively researched.
                        </p>
                        <Divider/>
                        <p className="left-align">
                            Disclaimer: This website is for educational purposes only and should not be used as a diagnostic tool.
                        </p>
                        </div>
                    )}
                    <div className="child">
                        {bio ? (
                            <div className="surround-overview content-container">
                            <Overview />
                        </div>
                        ):(null)}
                    </div>
                </div>
                {bio ? (
                    <div className="center content-container">
                        <Graph />
                    </div>
                ) : <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>}
            </div>
        </Fragment>
    );
}

export default MainContent;
