import React, { useState, useContext, useEffect, Fragment } from 'react';
import { BioContext } from '../BioContext';

const Overview = () => {
    const { bio, fetchBio } = useContext(BioContext);

    return <Fragment>
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
    </Fragment>
}

export default Overview;
