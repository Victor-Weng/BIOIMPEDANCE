import React, { useContext, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Graph = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return (
        <Fragment>
            <div>
                <h1>Bios Data</h1>
                <button onClick={fetchBio}>Calculate</button>
                {bio ? (
                    bio.map((bioItem, index) => (
                        <div key={index}>
                            <p>Location: {bioItem.location}</p>
                            <p>Size: {bioItem.size}</p>
                            <p>Depth: {bioItem.depth}</p>
                            <p>Frequency: {bioItem.frequency}</p>
                            <p>Condition: {bioItem.condition}</p>
                            {/* Add other fields as needed */}
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

