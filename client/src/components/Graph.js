import React, { useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Graph = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return (
        <Fragment>
            <div>
                <h1>Bios Data</h1>
                {bio ? (
                    <div>
                        <p>Impedance: {bio.impedance}</p>
                        <p>Phase: {bio.phase}</p>
                    </div>
                ) : (
                    <p>No bios data available</p>
                )}
            </div>
        </Fragment>
    );
};

export default Graph;

