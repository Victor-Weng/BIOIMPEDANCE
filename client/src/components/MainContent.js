import { Fragment, useContext } from 'react';
import { BioContext } from '../BioContext';
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

            <div className="main-content">
                <div className="parent">
                    {bio ? (
                        <div className="child">
                            <h1 className="main-title main-title-color">Your skin</h1>
                            <span className="condition-message inline-text">
                                {getConditionMessage(bio.condition)}
                            </span>
                        </div>
                    ) : (
                        <h1 className="main-title">Your skin is...</h1>
                    )}
                    <div className="child">
                        <div className="surround-overview content-container-surround">
                            <div>
                                <Overview/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                <Graph />
                </div>
            </div>
        </Fragment>
    );
}

export default MainContent;
