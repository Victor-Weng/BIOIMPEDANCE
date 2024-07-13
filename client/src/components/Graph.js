import React, { useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Graph = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return (
        <Fragment>
            <div>
                <h1>Bios Data</h1>
                {bio ? (
                    bio.map((bioItem, index) => (
                        <div key={index}>
                            <p>Impedance: {bioItem.impedance}</p>
                            <p>Phase: {bioItem.phase}</p>
                        </div>
                    ))
                ) : (
                    <p>No bios data available</p>
                )}
            </div>
        </Fragment>
    );
};

export default Graph;

